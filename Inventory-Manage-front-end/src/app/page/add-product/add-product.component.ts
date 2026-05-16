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
    this.http.post<any>("http://localhost:8080/product/add-product", this.product)
      .subscribe(data => {
        Swal.fire({
          title: "Good job!",
          text: "Product added successfully!",
          icon: "success"
        });



      });
  }


}
