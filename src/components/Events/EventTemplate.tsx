import { FC } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Event } from "../../types/Event";
import { formatDate } from "../../utils/CalendarUtils";

type Props = {
    activeEvent: Event;
};

const EventTemplate: FC<Props> = ({ activeEvent }) => {

    if (!activeEvent) return <></>
    return (
        <div className="event">
            <span className="titleContainer">
                <h2 className="title">{activeEvent.title}</h2>
                -
                <p>{formatDate(activeEvent.start)}</p>
            </span>
            <span>{documentToReactComponents(activeEvent.paragraphe1)}</span>
            <div className="tickets">
                <h3>Tickets</h3>
                <div className="cta mb-50">
                    <a href={activeEvent.fullAccess.url} className="btn_dark">{activeEvent.fullAccess.name}</a>
                    {activeEvent.atelier ? <a href={activeEvent.atelier.url} className="btn_dark">{activeEvent.atelier.name}</a> : <></>}
                    {activeEvent.concert ? <a href={activeEvent.concert.url} className="btn_dark">{activeEvent.concert.name}</a> : <></>}
                    {activeEvent.conference ? <a href={activeEvent.conference.url} className="btn_dark">{activeEvent.conference.name}</a> : <></>}
                    {activeEvent.film ? <a href={activeEvent.film.url} className="btn_dark">{activeEvent.film.name}</a> : <></>}
                </div>
            </div>
        </div>
    );
};

export default EventTemplate;
