import { Dispatch, SetStateAction } from "react";
import { Event } from "../types/Event";

export const handleEventClick = (data:any, events:Event[], setActiveEvent:Dispatch<SetStateAction<Event | undefined>>) => {
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

export const sortEventsByStartDate = (events: Event[]): Event[] => {
    return events.sort((a, b) => {
      const dateA = new Date(a.start);
      const dateB = new Date(b.start);
      return dateA.getTime() - dateB.getTime();
    });
};

export const formatDate = (dateString: string): string =>  {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
    return date.toLocaleDateString('fr', options);
  }