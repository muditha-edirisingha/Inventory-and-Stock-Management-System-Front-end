import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remove-stock',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './remove-stock.component.html',
  styleUrl: './remove-stock.component.css'
})
export class RemoveStockComponent {
  constructor(private http: HttpClient) { }

  public stock: any = {
    quntityRemoved: "",
    productId: ""
  }


  RemoveStock() {

  // Validation
  if (
    !this.stock.quntityRemoved ||
    !this.stock.productId
  ) {

    Swal.fire({
      title: "Warning!",
      text: "Please fill all fields!",
      icon: "warning"
    });

    return;
  }

  const stockData = {
    ...this.stock,
    dateTime: new Date().toISOString().slice(0, 19)
  };

  this.http.post<any>("http://localhost:8080/stock/reduce-stock", stockData)
    .subscribe({

      next: (data) => {

        console.log(data);

        Swal.fire({
          title: "Good job!",
          text: "Stock removed successfully!",
          icon: "success"
        });

        // Clear fields
        this.stock = {
          quntityRemoved: "",
          productId: ""
        };

      },

      error: (err) => {

        console.log(err);

        Swal.fire({
          title: "Error!",
          text: "Stock not removed!",
          icon: "error"
        });

      }

    });

}


}
