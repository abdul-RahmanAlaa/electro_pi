import { ICategory } from "@/types";

export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
  creationAt: string;
  updatedAt: string;
}
