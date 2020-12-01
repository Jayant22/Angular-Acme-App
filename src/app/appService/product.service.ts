import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { IProduct } from '../IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = '../../assets/Resource/products.jsonx';
  product: IProduct;

  constructor(private http: HttpClient, private router: Router) { }

  getProducts(): Observable<IProduct[]>{
      return this.http.get<IProduct[]>(this.url);
  }
}
