import { FC, useEffect, useState } from "react";
import { moveEventsContainer } from "../../utils/EventsUtils";
import Calendar from "../Calendar/Calendar";


type Props = {
  active: string;
};

const Events: FC<Props> = ({ active }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    moveEventsContainer(active);
  }, [active]);

  return (
    <section id="events" className={`events_container`}>
      <div className="event_container">
        <h1>Evento</h1>
      </div>
      <Calendar open={open} setOpen={setOpen} />
    </section>
  );
};

export default Events;
