import { Injectable } from '@angular/core';
import { Product } from '../shared/models/products';
import { Pagination } from '../shared/models/paging';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Brand } from '../shared/models/brands';
import { Type } from '../shared/models/types';


@Injectable({
  providedIn: "root"
})
export class ShopService {

  constructor(private http:HttpClient) { }

  baseUrl = "https://localhost:7125/api/"

  getProducts(brandId?:number,typeId?:number) {
    let params = new HttpParams();
    if(brandId) params = params.append("brandId",brandId);
    if(typeId) params = params.append("typeId",typeId);
    return this.http.get<Pagination<Product[]>>(this.baseUrl+"product", {params:params})
  }

  getBrands() {
    return this.http.get<Brand[]>(this.baseUrl+"product/brands")
  }

  getTypes() {
    return this.http.get<Type[]>(this.baseUrl+"product/types")
  }
}
