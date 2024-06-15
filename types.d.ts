type Log = {
  name: string;
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
