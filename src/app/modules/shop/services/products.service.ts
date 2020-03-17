import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductRequestsService } from './product-requests.service';
import { map, tap } from 'rxjs/operators';
import { RequestResponse } from '../../shared/models/request-response.model';

@Injectable()
export class ProductsService {
  constructor(private productRequestsService: ProductRequestsService) {}

  listProducts(): Observable<RequestResponse<Product[]>> {
    return this.productRequestsService
      .getProductList()
      .pipe(map((response) => response));
  }

  toggleProductReaction(
    type: number,
    product: number
  ): Observable<RequestResponse<Product>> {
    return;
  }
}
