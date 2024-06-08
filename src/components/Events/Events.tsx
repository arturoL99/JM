import { FC, useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { moveEventsContainer } from "../../utils/EventsUtils";
import Calendar from "../Calendar/Calendar";
import { Event } from "../../types/Event";
import { findFirstEvent } from "../../utils/CalendarUtils";


type Props = {
  active: string;
  eventsProps: Event[];
};

const Events: FC<Props> = ({ active, eventsProps }) => {
  const [open, setOpen] = useState(true);
  const [events, setEvents] = useState<Event[]>(eventsProps)
  const [activeEvent, setActiveEvent] = useState<Event>(events[0]);

  useEffect(() => {
    moveEventsContainer(active);
  }, [active]);

  useEffect(() => {
    const firstEvent = findFirstEvent(events);
    if(firstEvent) setActiveEvent(firstEvent);
  }, [events]);

  if (!activeEvent) return <></>
  return (
    <section id="events" className={`events_container`}>
      <div className={open ? "event_container" : "event_container expanded"}>
        <div className="event">
          <h1>{activeEvent.title}</h1>
          <span>{documentToReactComponents(activeEvent.paragraphe1)}</span>
          <div className="tickets">
            <h3>TICKETS</h3>
            <div className="cta">
              <a href={activeEvent.fullAccessUrl} className="btn_dark">{activeEvent.fullAccess}</a>
              <a href={activeEvent.atelierUrl} className="btn_dark">{activeEvent.atelier}</a>
              <a href={activeEvent.concertUrl} className="btn_dark">{activeEvent.concert}</a>
              <a href={activeEvent.conferenceUrl} className="btn_dark">{activeEvent.conference}</a>
              <a href={activeEvent.filmUrl} className="btn_dark">{activeEvent.film}</a>
            </div>
          </div>
        </div>
      </div>
      <Calendar open={open} setOpen={setOpen} events={events} activeEvent={activeEvent} setActiveEvent={setActiveEvent} />
    </section>
  );
};

export default Events;
