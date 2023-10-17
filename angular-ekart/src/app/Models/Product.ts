export class Product {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  brand: string | undefined;
  gender: string | undefined;
  category: string | undefined;
  size: number[] = [];
  color: string[] = [];
  price: number = 0;
  discountPrice?: number = 0;
  is_in_inventory: boolean | undefined;
  items_left: number | undefined;
  imageURL: string | undefined;
  slug: string | undefined;
}