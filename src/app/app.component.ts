import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from './shared/models/paging';
import { Product } from './shared/models/products';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Store App';
  constructor(private http:HttpClient, private basketService:BasketService){}
  products:any[]=[];
  ngOnInit(): void {
    this.http.get<Pagination<Product[]>>("https://localhost:7125/api/product?pageSize=50").subscribe({
      next : response => {
        console.log(response.data)
        this.products=response.data},
      error:error => console.log(error),
      complete: ()=>{
        console.log("Resquest completed")
        console.log("Extra statements")
      }
    })
    const basketId = localStorage.getItem('basket_id');
    if(basketId)
    {
      this.basketService.getBasket(basketId);
    }
  }
}
