import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './modules/core/core.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationInterceptor } from './modules/core/interceptors/authentication.interceptor';
import { TransformObjectInterceptor } from './modules/core/interceptors/transform-object.interceptor';
import { ErrorInterceptor } from './modules/core/interceptors/error.interceptor';
import { SnackbarService } from './modules/core/services/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TransformObjectInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthenticationInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    MatSnackBarModule,
    AuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    EffectsModule,
    EffectsModule.forRoot([]),
    MatButtonModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [...interceptors, SnackbarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
