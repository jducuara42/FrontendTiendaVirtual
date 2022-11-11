import { Category } from "./category.model";
import { Swap } from "./swap.model";

export interface Product
{
  productId: number;
	name: string;
	description: string;
	price: number;
	categoryId: number;
	active: boolean;
  image: string;
  category?: Category;
  swap?: Swap;
}
