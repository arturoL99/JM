import { ContentfulImg } from "./ContentfulImg";

export type Event = {
  title: string;
  paragraphe1: any;
  verticalImg: ContentfulImg;
  horizontalImg: ContentfulImg;
  map: string;
  start: any;
  end: any;
  fullAccess: EventCTA;
  concert?: EventCTA;
  film?: EventCTA;
  conference?: EventCTA;
  atelier?: EventCTA;
};

export type EventCTA = {
  name: string;
  url: string;
}