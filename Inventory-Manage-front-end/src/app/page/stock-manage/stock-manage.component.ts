import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stock-manage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './stock-manage.component.html',
  styleUrl: './stock-manage.component.css'
})
export class StockManageComponent {
  public stockList:any = [];

  constructor(private http:HttpClient) { 
    this.loadStock();
  }   
  
  loadStock(){
    this.http.get("http://localhost:8080/stock/get-all-stocks").subscribe(data=>{
        this.stockList = data;
        console.log(data);

    })
  }

}