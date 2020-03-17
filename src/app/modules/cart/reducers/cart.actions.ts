import { createAction, props } from '@ngrx/store';
import { Product } from '../../shop/models/product.model';
import { Update } from '@ngrx/entity';

export const addProductToCart = createAction(
  '[Cart] Purchase Product',
  props<{ payload: Product }>()
);

export const removeProduct = createAction(
  '[Cart] Remove Product',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Cart] Clear');

export const updateAmount = createAction(
  '[Cart] Update product amount',
  props<{ payload: Update<Product> }>()
);
