interface Painting {
  uid: string;
  title: string;
  year: number | string;
  medium: string;
  height: string | number;
  width: string | number;
  image: string;
  path?: string;
}

export default Painting;