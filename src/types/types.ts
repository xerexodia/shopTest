export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {count: number; rate: string};
  title: string;
}
