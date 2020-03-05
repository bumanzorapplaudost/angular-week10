import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { AuthFormComponent } from './modules/auth/components/auth-form/auth-form.component';
import { MainComponent } from './modules/shop/components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        component: AuthFormComponent,
      },
      {
        path: 'shop',
        component: MainComponent,
        loadChildren: () =>
          import('./modules/shop/shop.module').then((m) => m.ShopModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
