import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from '../cart/components/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import * as fromShop from './reducers/shop.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ShopEffects } from './reducers/shop.effects';
import { ProductsService } from './services/products.service';
import { ProductRequestsService } from './services/product-requests.service';
import { ProductComponent } from './components/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactionButtonsComponent } from './components/reaction-buttons/reaction-buttons.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  ProductListComponent,
  ProductDetailsComponent,
  CategoryListComponent,
  CartComponent,
  MainComponent,
  ProductComponent,
  ReactionButtonsComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ShopEffects]),
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatSidenavModule,
    ShopRoutingModule,
    StoreModule.forFeature(fromShop.shopFeatureKey, fromShop.shopReducers),
  ],
  providers: [ProductsService, ProductRequestsService],
})
export class ShopModule {}
