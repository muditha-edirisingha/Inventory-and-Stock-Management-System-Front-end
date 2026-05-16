import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-stock',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-stock.component.html',
  styleUrl: './add-stock.component.css'
})
export class AddStockComponent {
  constructor(private http: HttpClient) { }

  public stock: any = {
    quntityAdded: "",
    productId: ""
  }


  addStock() {
    const stockData = {
      ...this.stock,
      dateTime: new Date().toISOString()
    };

    this.http.post<any>("http://localhost:8080/stock/add-stock", stockData)
      .subscribe(data => {
        Swal.fire({
          title: "Good job!",
          text: "Stock added successfully!",
          icon: "success"
        });

        this.stock = {
          quantityAdded: "",
          productId: ""
        };
      });
  }
}
