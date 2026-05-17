import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-by-id',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-by-id.component.html',
  styleUrl: './supplier-by-id.component.css'
})
export class SupplierByIdComponent {
  public searchedSupplierList: any = [];

  public supId: any = "";

  constructor(private http: HttpClient) {
    
  }

  loadProduct(supId: any = this.supId) {

  // Validation
  if (!supId) {

    Swal.fire({
      title: "Warning!",
      text: "Please enter Supplier ID!",
      icon: "warning"
    });

    return;
  }

  this.http.get(`http://localhost:8080/supplier/search-by-id/${supId}`)
    .subscribe({

      next: (data: any) => {

        if (!data || data.length === 0) {

          this.searchedSupplierList = [];

          Swal.fire({
            title: "Not Found!",
            text: "Supplier not found!",
            icon: "error"
          });

          return;
        }

        this.searchedSupplierList = data;
        console.log(data);

      },

      error: (err) => {

        console.log(err);

        this.searchedSupplierList = [];

        Swal.fire({
          title: "Error!",
          text: "Supplier not found!",
          icon: "error"
        });

      }

    });

}
}
