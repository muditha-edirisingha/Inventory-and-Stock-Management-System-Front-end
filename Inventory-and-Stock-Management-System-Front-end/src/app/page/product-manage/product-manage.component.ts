import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-manage',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './product-manage.component.html',
  styleUrl: './product-manage.component.css'
})
export class ProductManageComponent {
  public productList:any  = [];

  constructor(private http:HttpClient){
    this.loadProduct();
  }
  
  loadProduct(){
    this.http.get("http://localhost:8080/product/get-all").subscribe(data=>{
      console.log(data);
      this.productList = data;
    })
  }
  
  
}
