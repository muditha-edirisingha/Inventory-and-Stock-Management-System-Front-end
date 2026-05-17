import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-by-name',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-by-name.component.html',
  styleUrl: './supplier-by-name.component.css'
})
export class SupplierByNameComponent {
public searchedSupplierList: any = [];

  public supName: any = "";

  constructor(private http: HttpClient) {
    
  }

  loadProduct(supName: any = this.supName) {

  // Validation
  if (!supName.trim()) {

    Swal.fire({
      title: "Warning!",
      text: "Please enter Supplier Name!",
      icon: "warning"
    });

    return;
  }

  this.http.get(`http://localhost:8080/supplier/search-by-name/${supName}`)
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
