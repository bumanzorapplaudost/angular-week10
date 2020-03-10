import { ProductImage } from './product-image.model';
import { ProductMaster } from './product-master.model';
import { Category } from './category.model';

export class Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  active: number;
  likesCount: number;
  likesUpCount: number;
  likesDownCount: number;
  publishedAt: string;
  master: ProductMaster;
  category: Category;
  image: ProductImage;
  myReaction?: number;
  purchasedQty?: number;
}
