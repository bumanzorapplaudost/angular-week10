import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/states/app.state';
import { cartActions } from '../../../cart/reducers/cart-action.types';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  addProductToCart() {
    const payload = this.product;
    this.store.dispatch(cartActions.addProductToCart({ payload }));
  }
}
