import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryRequestsService } from './category-requests.service';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private categoriesRequestsService: CategoryRequestsService) {}

  listCategories(): Observable<Category[]> {
    return this.categoriesRequestsService
      .getCategories()
      .pipe(map((response) => response.data));
  }
}
