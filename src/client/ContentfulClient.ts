import { createClient } from "contentful";

const contentfulClient = createClient({
  space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}`,
  accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_SECRET}`,
});

export default contentfulClient;