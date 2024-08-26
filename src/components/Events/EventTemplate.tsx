import { FC } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Event } from "../../types/Event";
import { formatDate } from "../../utils/CalendarUtils";
import Image from "next/image";

type Props = {
    activeEvent: Event;
};

const EventTemplate: FC<Props> = ({ activeEvent }) => {
    if (!activeEvent) return <></>
    return (
        <div className="event">
            <div className="event_content_1">
                <div className="event_text">
                    <span className="titleContainer">
                        <h2 className="title">{activeEvent.title}</h2>
                        -
                        <p>{formatDate(activeEvent.start)}</p>
                    </span>
                    <span className="event_description">{documentToReactComponents(activeEvent.paragraphe1)}</span>
                </div>
                <div className="event_photo_container_vertical">
                    <Image
                        src={`https:${activeEvent.verticalImg.url}`}
                        height={activeEvent.verticalImg.height}
                        width={activeEvent.verticalImg.width}
                        alt="project"
                        className="event_photo"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="event_content_2 my-50">
                <div className="event_photo_container_horizontal">
                    <Image
                        src={`https:${activeEvent.horizontalImg.url}`}
                        height={activeEvent.horizontalImg.height}
                        width={activeEvent.horizontalImg.width}
                        alt="project"
                        className="event_photo"
                        loading="lazy"
                    />
                </div>
                <div className="event_map_container">
                    <iframe src={activeEvent.map} width="600" height="450" loading="lazy" className="event_map" />
                </div>
            </div>
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
