import {
  initialShopState,
  ShopState,
} from '../../modules/shop/reducers/shop.reducers';
import { CartState, initialCartState } from '../../modules/cart/reducers/cart.reducers';

export interface AppState {
  shop: ShopState;
  cart: CartState;
}

export const initialAppState: AppState = {
  shop: initialShopState,
  cart: initialCartState,
};
