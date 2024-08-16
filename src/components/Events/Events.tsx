import { FC, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { moveEventsContainer } from "../../utils/EventsUtils";
import Calendar from "../Calendar/Calendar";
import { Event } from "../../types/Event";
import EventTemplate from "./EventTemplate";
import EventDefault from "./EventDefault";
import { sortEventsByStartDate } from "../../utils/CalendarUtils";


type Props = {
  active: string;
  eventsProps: Event[];
};

const Events: FC<Props> = ({ active, eventsProps }) => {
  const [open, setOpen] = useState(true);
  const [events, setEvents] = useState<Event[]>(eventsProps)
  const [activeEvent, setActiveEvent] = useState<Event>();

  useEffect(() => {
    moveEventsContainer(active);
    const sortedEvents = sortEventsByStartDate(events);

console.log(sortedEvents);
  }, [active]);

  return (
    <section id="events" className={`events_container`}>
      <div className={open ? "event_container" : "event_container expanded"}>
        {activeEvent ? <EventTemplate activeEvent={activeEvent} /> : <EventDefault events={events} /> }
      </div>
      <Calendar open={open} setOpen={setOpen} events={events} setActiveEvent={setActiveEvent} />
    </section>
  );
};

export default Events;
