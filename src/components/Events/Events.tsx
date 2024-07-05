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
            <h3>Tickets</h3>
            <div className="cta mb-50">
              <a href={activeEvent.fullAccess.url} className="btn_dark">{activeEvent.fullAccess.name}</a>
              {activeEvent.atelier ? <a href={activeEvent.atelier.url} className="btn_dark">{activeEvent.atelier.name}</a> : <></> }
              {activeEvent.concert ? <a href={activeEvent.concert.url} className="btn_dark">{activeEvent.concert.name}</a> : <></> }
              {activeEvent.conference ? <a href={activeEvent.conference.url} className="btn_dark">{activeEvent.conference.name}</a> : <></> }
              {activeEvent.film ? <a href={activeEvent.film.url} className="btn_dark">{activeEvent.film.name}</a> : <></> }
            </div>
          </div>
        </div>  
      </div>
      <Calendar open={open} setOpen={setOpen} events={events} setActiveEvent={setActiveEvent} />
    </section>
  );
};

export default Events;
