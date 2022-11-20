import { ContentfulImg } from "./ContentfulImg";

export type Project = {
  name: string;
  description: any;
  image: ContentfulImg;
  photos: ContentfulImg[];
};
