"use client"
import { Dispatch, FC, SetStateAction } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Image from "next/image";
import { Event } from "../../types/Event";
import { handleEventClick } from "../../utils/CalendarUtils";
import closeIcon from "../../images/icons8-close-50.webp";
import calendarIcon from "../../images/icons8-calendar-50.webp";

type Props = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    events: Event[];
    setActiveEvent: Dispatch<SetStateAction<Event | undefined>>;
};

const Calendar: FC<Props> = ({ open, setOpen, events, setActiveEvent }) => {
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
            <div className={open ? "btn_container" : "btn_container closed"} onClick={() => setOpen(!open)}>
                <Image
                    src={open ? closeIcon : calendarIcon}
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
