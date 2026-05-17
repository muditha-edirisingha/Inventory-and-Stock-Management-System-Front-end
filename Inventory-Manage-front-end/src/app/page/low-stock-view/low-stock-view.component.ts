import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-low-stock-view',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './low-stock-view.component.html',
  styleUrl: './low-stock-view.component.css'
})
export class LowStockViewComponent {

   public lowStockList:any = [];
  
    constructor(private http:HttpClient) { 
      this.loadStock();
    }   
    
    loadStock(){
      this.http.get("http://localhost:8080/report/get-low-stock-report").subscribe(data=>{
          this.lowStockList = data;
          console.log(data);
  
      })
    }
}

