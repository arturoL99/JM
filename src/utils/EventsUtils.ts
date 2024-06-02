import anime from "animejs";
import { Event } from "../types/Event";

export const moveEventsContainer = (active:string) => {
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
          date: contentfulEvent.fields.date
        };
        events.push(event);
      });
      return events;
    } else {
      const event: Event[] = [{
        title: "contentfulEvent.fields.title",
        paragraphe1: "contentfulEvent.fields.paragraphe1 || null",
        date: "contentfulEvent.fields.date"
      }];
      return event;
    }
  };