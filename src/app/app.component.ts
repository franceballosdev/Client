import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    this.http.get("https://localhost:7125/api/product?pageSize=50").subscribe({
      next : (response:any) => this.products=response.data,
      error:error => console.log(error),
      complete: ()=>{
        console.log("Resquest completed")
        console.log("Extra statements")
      }
    })
  }
}
