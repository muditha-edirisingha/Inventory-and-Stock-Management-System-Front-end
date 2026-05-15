import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-manage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-manage.component.html',
  styleUrl: './product-manage.component.css'
})
export class ProductManageComponent {
  public ProductList: any = [];

  constructor(private http: HttpClient) {
    this.loadProduct();
  }

  loadProduct() {
    this.http.get("http://localhost:8080/product/get-all").subscribe(data => {
      this.ProductList = data;
      console.log(data);

    })
  }

  deleteProduct(id: any) {

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
        this.http.delete(`http://localhost:8080/product/delete-by-id/${id}`).subscribe(data => {
          this.loadProduct();
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

  public selectedProduct: any = {};


  public isModalOpen = false;


  selectProduct(product: any) {
    this.selectedProduct = { ...product };
  this.isModalOpen = true;
  }

  closeModal() {
  this.isModalOpen = false;
}


  updateProduct() {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`
  }).then((result) => {
    if (result.isConfirmed) {
      this.http.put("http://localhost:8080/product/update-product", this.selectedProduct)
        .subscribe(() => {
          this.loadProduct();
          this.closeModal();
          Swal.fire("Saved!", "", "success");
        });
    }
  });
}

}
