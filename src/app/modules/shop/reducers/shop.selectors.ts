import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shopAdapter, ShopState } from './shop.reducers';
import { AppState, initialAppState } from '../../../store/states/app.state';

// export const getShop = (state: AppState) => state.shop;
export const gs = (state: AppState = initialAppState) => state;

const shopSelectors = shopAdapter.getSelectors();

export const selectShopState = createFeatureSelector<ShopState>('shop');

export const selectAllProducts = createSelector(
  selectShopState,
  shopSelectors.selectAll
);

export const selectFilteredIds = createSelector(
  selectShopState,
  (state) => state.filteredIds
);
