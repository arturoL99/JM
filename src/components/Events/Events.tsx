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
      <Calendar />
      <div className="event_container">
        
      </div>
    </section>
  );
};

export default Events;
