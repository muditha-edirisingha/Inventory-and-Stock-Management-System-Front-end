import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-search-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-search-name.component.html',
  styleUrl: './product-search-name.component.css'
})
export class ProductSearchNameComponent {
   public searchedProductList: any = [];
  
    public proname: any = "";
    
      constructor(private http: HttpClient) {
        
      }
    
      loadProduct(proname: any = this.proname) {

  // Validation
  if (!proname.trim()) {

    Swal.fire({
      title: "Warning!",
      text: "Please enter Product Name!",
      icon: "warning"
    });

    return;
  }

  this.http.get(`http://localhost:8080/product/search-by-name/${proname}`)
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

        console.log(err);

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
