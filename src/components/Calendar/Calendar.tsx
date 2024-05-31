"use client"
import { FC, useEffect, useState } from "react";
import { moveEventsContainer } from "../../utils/EventsUtils";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable, DropArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

type Props = {

};

const Calendar: FC<Props> = ({ }) => {
    const [open, setOpen] = useState(true);


    return (
        <div className="calendar_container">
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                headerToolbar={{
                    left:"title",
                    center:"",
                    right:"prev, next"
                }}
                events={{}}
                nowIndicator={true}
                editable={false}
                droppable={false}
                selectable={true}
                selectMirror={true}
                // dateClick={}
                // eventClick={}
            />
        </div>
    );
};

export default Calendar;
