export interface IProductCategory {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: IProductCategory;
  images: string[];
  creationAt: string;
  updatedAt: string;
}
