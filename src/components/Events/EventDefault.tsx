import { FC } from "react";
import { Event } from "../../types/Event";
import { formatDate } from "../../utils/CalendarUtils";



type Props = {
    events: Event[];
};

const EventDefault: FC<Props> = ({ events }) => {
    return (
        <div className="event default">
            <div>
                <h2 className="title">Next Up</h2>
                <p>Nos prochains évenements seront:</p>
                <ul>
                    {
                        events.map((event, i) => {
                            return <li key={i}><b>{event.title}</b> - {formatDate(event.start)}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default EventDefault;
