import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { moveEventsContainer } from "../../utils/EventsUtils";
import Calendar from "../Calendar/Calendar";
import { Event } from "../../types/Event";
import EventTemplate from "./EventTemplate";
import EventDefault from "./EventDefault";
import { sortEventsByStartDate } from "../../utils/CalendarUtils";
import logoWhite from "../../images/P360_Logo_Final_white.png";
import logoBlack from "../../images/P360_Logo_Final_Black.png";
import Image from "next/image";
import { handleLogoClick } from "../../utils/MainUtils";


type Props = {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  eventsProps: Event[];
};

const Events: FC<Props> = ({ active, eventsProps, setActive }) => {
  const [open, setOpen] = useState(true);
  const [events, setEvents] = useState<Event[]>(sortEventsByStartDate(eventsProps))
  const [activeEvent, setActiveEvent] = useState<Event>();

  useEffect(() => {
    moveEventsContainer(active);
  }, [active]);

  return (
    <section id="events" className={`events_container`}>
      <div className="home_icon_container" onClick={() => handleLogoClick(setActive)}>
        {
          open ?
            <Image src={logoBlack} className="home_icon" alt="icon" width={200} height={35} /> :
            <Image src={logoWhite} className="home_icon" alt="icon" width={200} height={35} />
        }
      </div>
      <div className={open ? "event_container spacer" : "event_container spacer expanded"}>
        {activeEvent ? <EventTemplate activeEvent={activeEvent} /> : <EventDefault events={events} />}
      </div>
      <Calendar open={open} setOpen={setOpen} events={events} setActiveEvent={setActiveEvent} />
    </section>
  );
};

export default Events;
