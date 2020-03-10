import { Injectable } from '@angular/core';
import { CategoryRequestsService } from './category-requests.service';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private categorieRequestsService: CategoryRequestsService) {}

  listCategories(): Observable<Category[]> {
    return this.categorieRequestsService
      .getCategories()
      .pipe(map((response) => response.data));
  }
}
