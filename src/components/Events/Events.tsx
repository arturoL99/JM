import { FC, useEffect, useState } from "react";
import { moveEventsContainer } from "../../utils/EventsUtils";
import Calendar from "../Calendar/Calendar";
import { Event } from "../../types/Event";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


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
  }, [active]);

  useEffect(() => {
    setActiveEvent(events[0]);
  }, [events]);

  console.log(eventsProps);
  if (!activeEvent) return <></>
  return (
    <section id="events" className={`events_container`}>
      <div className={open ? "event_container" : "event_container expanded"}>
        <div className="event">
          <h1>{activeEvent.title}</h1>
          <span>{documentToReactComponents(activeEvent.paragraphe1)}</span>
        </div>
      </div>
      <Calendar open={open} setOpen={setOpen} />
    </section>
  );
};

export default Events;
