import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { shopActions } from '../../reducers/shop-action-types';
import { selectAllProducts } from '../../reducers/shop.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList$: Observable<Product[]> = this.store.select(selectAllProducts);

  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.productsService.listProducts();
    this.store.dispatch(shopActions.getProductsAction());
  }
}
