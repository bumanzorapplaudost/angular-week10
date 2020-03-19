import { TestBed } from '@angular/core/testing';

import { TransformObjectInterceptor } from './transform-object.interceptor';

describe('TransformObjectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TransformObjectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TransformObjectInterceptor = TestBed.inject(TransformObjectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
