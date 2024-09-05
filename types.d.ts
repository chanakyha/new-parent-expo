import { Href } from "expo-router";

type Log = {
  name: string;
  href: Href<`/${string}`>;
  image: ImageSourcePropType;
  topBarImage: ImageSourcePropType;
};

type Blog = {
  id: number;
  title: string;
  image: ImageSourcePropType;
  description: string;
  type: string;
  markdownDescription: string;
};
