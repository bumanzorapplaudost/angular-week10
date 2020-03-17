import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RequestResponse } from '../../shared/models/request-response.model';
import { Product } from '../models/product.model';
import { LoggedInUser } from '../../shared/models/logged-in-user.model';

@Injectable()
export class ProductRequestsService {
  includes = '?include=image_attachment.blob,category,master';
  url = environment.backendBaseUrl;

  constructor(private httpClient: HttpClient) {}

  getProductList(): Observable<RequestResponse<Product[]>> {
    return this.httpClient.get<RequestResponse<Product[]>>(
      `${this.url}products${this.includes}`
    );
  }

  getProductReactions() {
    const user: LoggedInUser = JSON.parse(localStorage.getItem('user'));
    const userId = user.id;
    const options = `?filter[user_id_eq]=${userId}`;
    return this.httpClient.get(`${this.url}likes${options}`);
  }
}
