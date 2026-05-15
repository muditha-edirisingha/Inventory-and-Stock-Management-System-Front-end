import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-manage.component.html',
  styleUrl: './supplier-manage.component.css'
})
export class SupplierManageComponent {
  public supplierList: any = [];

  constructor(private http: HttpClient) {
    this.loadSupplier();
  }

  loadSupplier() {
    this.http.get("http://localhost:8080/supplier/get-all-suppliers").subscribe(data => {
      this.supplierList = data;
      console.log(data);

    })
  }

  deleteSupplier(id: any) {
  
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mx-2",
          cancelButton:
            "bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg mx-2"
        },
        buttonsStyling: false
      });
  
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.http.delete(`http://localhost:8080/supplier/delete-supplier/${id}`).subscribe(data => {
            this.loadSupplier();
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          })
  
        } else if (result.dismiss === Swal.DismissReason.cancel) swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      })
  
  
  }

  public selectedSupplier: any = {};
  
  
    public isModalOpen = false;
  
  
    selectSupplier(supplier: any) {
      this.selectedSupplier = { ...supplier };
    this.isModalOpen = true;
    }
  
    closeModal() {
    this.isModalOpen = false;
  }
  
  
    updateSupplier() {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put("http://localhost:8080/supplier/update-supplier", this.selectedSupplier).subscribe(() => {
            this.loadSupplier();
            this.closeModal();
            Swal.fire("Saved!", "", "success");
          });
      }
    });
  }



}
