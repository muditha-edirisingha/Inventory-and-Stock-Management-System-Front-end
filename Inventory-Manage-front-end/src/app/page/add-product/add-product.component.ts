import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  constructor(private http: HttpClient) { }

  public product: any = {
    productName: "",
    description: "",
    unitPrice: "",
    qty: "",
    supplierId: "",
  }




  addProduct() {

  // Validation
  if (
    !this.product.productName.trim() ||
    !this.product.description.trim() ||
    !this.product.unitPrice ||
    !this.product.qty ||
    !this.product.supplierId
  ) {

    Swal.fire({
      title: "Warning!",
      text: "Please fill all fields!",
      icon: "warning"
    });

    return;
  }

  this.http.post<any>("http://localhost:8080/product/add-product", this.product)
    .subscribe({

      next: (data) => {

        Swal.fire({
          title: "Good job!",
          text: "Product added successfully!",
          icon: "success"
        });

        // Clear form
        this.product = {
          productName: "",
          description: "",
          unitPrice: "",
          qty: "",
          supplierId: "",
        }

      },

      error: (err) => {

        console.log(err);

        Swal.fire({
          title: "Error!",
          text: "Product not added!",
          icon: "error"
        });

      }

    });

}


}
