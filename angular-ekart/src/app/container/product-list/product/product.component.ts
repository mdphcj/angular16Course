import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input()
  product: Product = {
    id: 0,
    name: '',
    description: '',
    brand: '',
    gender: '',
    category: '',
    size: [],
    color: [],
    price: 0,
    discountPrice: 0,
    is_in_inventory: false,
    items_left: 0,
    imageURL: '',
    slug: ''
  };
}
interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size: number[];
  color: string[];
  price: number;
  discountPrice?: number;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
};
