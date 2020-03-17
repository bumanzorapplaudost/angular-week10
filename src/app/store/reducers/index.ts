import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { AppState } from '../states/app.state';
import { shopReducers } from '../../modules/shop/reducers/shop.reducers';
import { cartReducers } from '../../modules/cart/reducers/cart.reducers';

export const reducers: ActionReducerMap<AppState> = {
  shop: shopReducers,
  cart: cartReducers,
};

export const metaReducers: MetaReducer<AppState>[] = [];
