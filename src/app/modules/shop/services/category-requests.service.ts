import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestResponse } from '../../shared/models/request-response.model';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryRequestsService {
  url = environment.backendBaseUrl;
  includes = '?include=image_attachment.blob,category,master';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<RequestResponse<Category[]>> {
    return this.httpClient.get<RequestResponse<Category[]>>(
      `${this.url}/categories?sort=name asc&page[size=0]`
    );
  }
}
