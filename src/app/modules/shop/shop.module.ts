import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MatListModule } from '@angular/material/list';
import { StoreModule } from '@ngrx/store';
import * as fromShop from '../../reducers';
import { HttpClientModule } from '@angular/common/http';

const components = [
  ProductListComponent,
  ProductDetailsComponent,
  CategoryListComponent,
  CartComponent,
  MainComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    ShopRoutingModule,
    StoreModule.forFeature(fromShop.shopFeatureKey, fromShop.reducers),
  ],
})
export class ShopModule {}
