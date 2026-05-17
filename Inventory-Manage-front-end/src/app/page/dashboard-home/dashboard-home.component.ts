import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  totalProducts: any = 0;
  stockIn: any = 0;
  stockOut: any = 0;
  suppliers: any = 0;

  constructor(private http: HttpClient) {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.http.get<any>("http://localhost:8080/product/count")
      .subscribe(data => this.totalProducts = data);

    this.http.get<any>("http://localhost:8080/stock/stock-in-count")
      .subscribe(data => this.stockIn = data);

    this.http.get<any>("http://localhost:8080/stock/stock-out-count")
      .subscribe(data => this.stockOut = data);

    this.http.get<any>("http://localhost:8080/supplier/count")
      .subscribe(data => this.suppliers = data);
  }
}
