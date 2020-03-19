import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../../shop/models/product.model';
import { cartActions } from './cart-action.types';

export const cartFeatureKey = 'cart';

export interface CartState extends EntityState<Product> {}

export const cartAdapter = createEntityAdapter<Product>();

export const initialCartState = cartAdapter.getInitialState();

export const cartReducers = createReducer(
  initialCartState,
  on(cartActions.addProductToCart, (state, action) => {
    return cartAdapter.upsertOne(action.payload, state);
  }),
  on(cartActions.removeProduct, (state, action) => {
    return cartAdapter.removeOne(action.productId, state);
  }),
  on(cartActions.clearCart, (state) => {
    return cartAdapter.removeAll(state);
  }),
  on(cartActions.updateAmount, (state, action) => {
    return cartAdapter.updateOne(action.payload, state);
  })
);
