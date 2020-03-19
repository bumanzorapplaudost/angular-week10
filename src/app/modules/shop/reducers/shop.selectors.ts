import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shopAdapter, ShopState } from './shop.reducers';
import { AppState } from '../../../store/states/app.state';

const shopSelectors = shopAdapter.getSelectors();

export const selectShopFeatureSelector = createFeatureSelector<ShopState>('shop');
export const selectShopState = (state: AppState) => state.shop;

export const selectAllProducts = createSelector(
  selectShopFeatureSelector,
  shopSelectors.selectAll
);

export const selectCurrentProductId = createSelector(
  selectShopState,
  (state) => state.currentProduct
);

export const selectProductEntities = createSelector(
  selectShopFeatureSelector,
  shopSelectors.selectEntities
);

export const selectCurrentProduct = createSelector(
  selectProductEntities,
  selectCurrentProductId,
  (productEntities, productId) => {
    if (productEntities[productId]) {
      return productEntities[productId];
    }
    return null;
  }
);

export const selectFilteredIds = createSelector(
  selectShopFeatureSelector,
  (state) => state.filteredIds
);
