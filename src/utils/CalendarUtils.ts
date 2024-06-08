import { Dispatch, SetStateAction } from "react";
import { Event } from "../types/Event";

export const handleEventClick = (data:any, events:Event[], setActiveEvent:Dispatch<SetStateAction<Event>>) => {
    events.map((event) => {
        if (event.title === data.event._def.title) {
            setActiveEvent(event);
        }
    });
};

export const findFirstEvent = (events:Event[]) => {
    let firstEvent:Event | undefined;
    events.map((event) => {
        if(!firstEvent) firstEvent=event;
        if(firstEvent.start > event.start) firstEvent=event;
    });
    return firstEvent;
};