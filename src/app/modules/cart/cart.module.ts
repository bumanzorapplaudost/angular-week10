import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './reducers/cart.reducers';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CartRoutingModule,
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.cartReducers),
  ],
})
export class CartModule {}
