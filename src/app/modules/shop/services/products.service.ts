import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductRequestsService } from './product-requests.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private productRequestsService: ProductRequestsService) {}

  listProducts(): Observable<Product[]> {
    return this.productRequestsService
      .getProductList()
      .pipe(map((response) => response.data));
  }
}
