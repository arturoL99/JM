"use client"
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Image from "next/image";
import { Event } from "../../types/Event";
import { findFirstEvent, handleEventClick } from "../../utils/CalendarUtils";

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    events: Event[];
    activeEvent: Event;
    setActiveEvent: Dispatch<SetStateAction<Event>>;
};

const Calendar: FC<Props> = ({ open, setOpen, events, activeEvent, setActiveEvent }) => {
        return (
        <div className={open ? "calendar_container" : "calendar_container closed"}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left: "title",
                    center: "",
                    right: "prev, next"
                }}
                events={events}
                nowIndicator={true}
                editable={false}
                droppable={false}
                selectable={true}
                selectMirror={true}
                eventClick={(data) => handleEventClick(data, events, setActiveEvent)}
            />
            <div className="btn_container" onClick={() => setOpen(!open)}>
                <Image
                    src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA30lEQVR4nN2UXQrCMBCEPwrt8bSK9Dr6ZtVb+HsjrT89hOizkcD6UtNmmyJCB+al3Z0Jye5A35EAGbAHCuApLORbJjVBGAMlYDy8AaM2whGwVAibChfS68UqQNwIc821mI5M68QTuc+uBmXdw2eexlkLk4nL4NDQMJUarcHWZXDxiLcxsHvyhYdHvAnVPqulMsgDDe6uorNito2SJ5fBTrFARsn1X8Y0Bq6/XDQkFbuIv4ABHoQkqRHOUSCS6G178lwb1x+kyjexCTAkELFMhM0WO9t2GS2PwEb+2Zoe4w06YxsyoVFeqwAAAABJRU5ErkJggg=="}
                    alt="arrow icon"
                    className=""
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
};

export default Calendar;
