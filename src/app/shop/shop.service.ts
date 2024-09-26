import { Injectable } from '@angular/core';
import { Product } from '../shared/models/products';
import { Pagination } from '../shared/models/paging';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class ShopService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:7125/api/"

  getProducts() {
    return this.http.get<Pagination<Product[]>>(this.baseUrl+"product?pageSize=50")
  }
}
