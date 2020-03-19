import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { ProductRequestsService } from './product-requests.service';
import { map } from 'rxjs/operators';
import { RequestResponse } from '../../shared/models/request-response.model';

@Injectable()
export class ProductsService {
  constructor(private productRequestsService: ProductRequestsService) {}

  listProducts(): Observable<RequestResponse<Product[]>> {
    return this.productRequestsService
      .getProductList()
      .pipe(map((response) => response));
  }

  toggleProductReaction(type: number, productId: number): Observable<Product> {
    return this.productRequestsService
      .reactToProduct(type, productId)
      .pipe(map((response) => response.data));
  }
}
