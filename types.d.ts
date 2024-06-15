type Log = {
  name: string;
  href: `/${string}`;
  image: ImageSourcePropType;
  topBarImage: ImageSourcePropType;
};

interface Blog {
  id: number;
  title: string;
  image: ImageSourcePropType;
  description: string;
  type: string;
  markdownDescription: string;
}
