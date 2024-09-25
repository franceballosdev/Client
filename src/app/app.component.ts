import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagination } from './models/paging';
import { Product } from './models/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Store App';
  constructor(private http:HttpClient){}
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
  }
}
