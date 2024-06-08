import anime from "animejs";
import { Event } from "../types/Event";

export const moveEventsContainer = (active: string) => {
  const right = active === "events" ? "-100vw" : "0";
  anime({
    targets: ".events_container",
    translateX: right,
    duration: 1000,
    easing: "linear",
  });
};

export const mapEvents = (contentfulEvents: any[]) => {
  if (contentfulEvents) {
    const events: Event[] = [];
    contentfulEvents.map((contentfulEvent) => {
      const event: Event = {
        title: contentfulEvent.fields.title,
        paragraphe1: contentfulEvent.fields.paragraphe1 || null,
        startDate: contentfulEvent.fields.startDate,
        endDate: contentfulEvent.fields.endDate,
        fullAccess: contentfulEvent.fields.fullAccess,
        fullAccessUrl: contentfulEvent.fields.fullAccessUrl,
        atelier: contentfulEvent.fields.atelier,
        atelierUrl: contentfulEvent.fields.atelierUrl,
        concert: contentfulEvent.fields.concert,
        concertUrl: contentfulEvent.fields.concertUrl,
        conference: contentfulEvent.fields.concert,
        conferenceUrl: contentfulEvent.fields.concertUrl,
        film: contentfulEvent.fields.film,
        filmUrl: contentfulEvent.fields.filmUrl
      };
      events.push(event);
    });
    return events;
  } else {
    const event: Event[] = [{
      title: "contentfulEvent.fields.title",
      paragraphe1: "contentfulEvent.fields.paragraphe1 || null",
      startDate: "contentfulEvent.fields.startDate",
      endDate: "contentfulEvent.fields.endDate",
      fullAccess: "contentfulEvent.fields.fullAccess",
      fullAccessUrl: "contentfulEvent.fields.fullAccessUrl",
      atelier: "contentfulEvent.fields.atelier",
      atelierUrl: "contentfulEvent.fields.atelierUrl",
      concert: "contentfulEvent.fields.concert",
      concertUrl: "contentfulEvent.fields.concertUrl",
      conference: "contentfulEvent.fields.concert",
      conferenceUrl: "contentfulEvent.fields.concertUrl",
      film: "contentfulEvent.fields.film",
      filmUrl: "contentfulEvent.fields.filmUrl"
    }];
    return event;
  }
};