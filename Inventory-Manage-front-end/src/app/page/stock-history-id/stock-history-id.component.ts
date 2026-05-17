import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-history-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './stock-history-id.component.html',
  styleUrl: './stock-history-id.component.css'
})
export class StockHistoryIdComponent {
  public searchedStockList: any = [];
  
    public stoId: any = "";
    
      constructor(private http: HttpClient) {
        
      }
    
      loadProduct(stoId: any = this.stoId) {

  // Validation
  if (!stoId) {

    Swal.fire({
      title: "Warning!",
      text: "Please enter Product ID!",
      icon: "warning"
    });

    return;
  }

  this.http.get(`http://localhost:8080/stock/get-stock-by-product-id/${stoId}`)
    .subscribe({

      next: (data: any) => {

        if (!data || data.length === 0) {

          this.searchedStockList = [];

          Swal.fire({
            title: "Not Found!",
            text: "Stock history not found!",
            icon: "error"
          });

          return;
        }

        this.searchedStockList = data;
        console.log(data);

      },

      error: (err) => {

        console.log(err);

        this.searchedStockList = [];

        Swal.fire({
          title: "Error!",
          text: "Stock history not found!",
          icon: "error"
        });

      }

    });

}

}
