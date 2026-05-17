import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-search-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search-id.component.html',
  styleUrl: './product-search-id.component.css'
})
export class ProductSearchIdComponent {
  public searchedProductList: any = [];

  public proId: any = "";
  
    constructor(private http: HttpClient) {
      
    }
  
    loadProduct(proId: any = this.proId) {

  if (!proId) {
    Swal.fire({
      title: "Warning!",
      text: "Please enter Product ID!",
      icon: "warning"
    });
    return;
  }

  this.http.get(`http://localhost:8080/product/search-by-productId/${proId}`)
    .subscribe({

      next: (data: any) => {

        if (!data || data.length === 0) {
          this.searchedProductList = [];

          Swal.fire({
            title: "Not Found!",
            text: "Product not found!",
            icon: "error"
          });

          return;
        }

        this.searchedProductList = data;
        console.log(data);
      },

      error: (err) => {
        this.searchedProductList = [];

        Swal.fire({
          title: "Error!",
          text: "Product not found!",
          icon: "error"
        });
      }

    });
}
}
