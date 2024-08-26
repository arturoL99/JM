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
        verticalImg: {
          url: contentfulEvent.fields.imageVerticale.fields.file.url,
          height: contentfulEvent.fields.imageVerticale.fields.file.details.image.height,
          width: contentfulEvent.fields.imageVerticale.fields.file.details.image.width
        },
        horizontalImg: {
          url: contentfulEvent.fields.imageHorizontale.fields.file.url,
          height: contentfulEvent.fields.imageHorizontale.fields.file.details.image.height,
          width: contentfulEvent.fields.imageHorizontale.fields.file.details.image.width
        },
        map: contentfulEvent.fields.googleMaps,
        start: contentfulEvent.fields.startDate,
        end: contentfulEvent.fields.endDate,
        fullAccess: contentfulEvent.fields.fullAccess,
        atelier: contentfulEvent.fields.atelier || null,
        concert: contentfulEvent.fields.concert || null,
        conference: contentfulEvent.fields.conference || null,
        film: contentfulEvent.fields.film || null,
      };
      events.push(event);
    });
    return events;
  } else {
    const cta = {
      name:"name",
      url:"url",
    };
    const event: Event[] = [{
      title: "contentfulEvent.fields.title",
      paragraphe1: "contentfulEvent.fields.paragraphe1 || null",
      start: "contentfulEvent.fields.startDate",
      end: "contentfulEvent.fields.endDate",
      verticalImg: {
        url: "",
        height:0,
        width:0
      },
      horizontalImg: {
        url: "",
        height:0,
        width:0
      },
      map:"",
      fullAccess: cta,
      atelier: cta,
      concert: cta,
      conference: cta,
      film: cta,
    }];
    return event;
  }
};