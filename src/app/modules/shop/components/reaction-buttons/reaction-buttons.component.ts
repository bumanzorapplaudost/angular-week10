import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/states/app.state';
import { Subject } from 'rxjs';
import { AuthStatusService } from '../../../shared/services/auth-status.service';
import { takeUntil } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-reaction-buttons',
  templateUrl: './reaction-buttons.component.html',
  styleUrls: ['./reaction-buttons.component.scss'],
})
export class ReactionButtonsComponent implements OnInit, OnDestroy {
  unsubscribe = new Subject();
  isAuthCorrect = false;
  thumbUpColor = '' as ThemePalette;
  thumbDownColor = '' as ThemePalette;

  @Input() productId: number;
  @Input() likes: number;
  @Input() dislikes: number;
  @Input() set reaction(value) {
    if (value !== -1 && value !== undefined) {
      value === 0
        ? (this.thumbDownColor = 'accent' as ThemePalette)
        : (this.thumbUpColor = 'accent' as ThemePalette);
    }
  }

  constructor(
    private productsService: ProductsService,
    private store: Store<AppState>,
    private authService: AuthStatusService
  ) {}

  ngOnInit() {
    this.authService.authStatus
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((status) => (this.isAuthCorrect = status));
  }

  likeButton(type: string = 'like') {
    const likeType = type === 'like' ? 1 : 0;
    if ((this.thumbDownColor as string) === '' && likeType === 0) {
      if ((this.thumbUpColor as string) !== '') {
        this.likes--;
      }
      this.dislikes++;
    }
    if ((this.thumbUpColor as string) === '' && likeType === 1) {
      if ((this.thumbDownColor as string) !== '') {
        this.dislikes--;
      }
      this.likes++;
    }
    this.productsService
      .toggleProductReaction(likeType, this.productId)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.thumbDownColor = this.thumbUpColor = '' as ThemePalette;
        likeType === 1
          ? (this.thumbUpColor = 'accent')
          : (this.thumbDownColor = 'accent');
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
