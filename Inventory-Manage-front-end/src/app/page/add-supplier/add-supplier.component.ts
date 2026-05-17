import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {

  constructor(private http: HttpClient) { }

  public supplier: any = {
    supplierName: "",
    supplierTel: "",
    email: "",
    address: "",

  }

  addSupplier() {

  if (
    !this.supplier.supplierName ||
    !this.supplier.supplierTel ||
    !this.supplier.email ||
    !this.supplier.address
  ) {
    Swal.fire({
      title: "Warning!",
      text: "Please fill all fields!",
      icon: "warning"
    });
    return;
  }

  this.http.post("http://localhost:8080/supplier/add-supplier", this.supplier)
    .subscribe({
      next: (data) => {

        Swal.fire({
          title: "Good job!",
          text: "Supplier added successfully!",
          icon: "success"
        });

        this.supplier = {
          supplierName: "",
          supplierTel: "",
          email: "",
          address: "",
        };

      },

      error: (err) => {
        Swal.fire({
          title: "Error!",
          text: "Supplier not added!",
          icon: "error"
        });
      }
    });
}
}
