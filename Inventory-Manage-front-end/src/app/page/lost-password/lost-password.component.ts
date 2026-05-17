import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lost-password',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './lost-password.component.html',
  styleUrl: './lost-password.component.css'
})
export class LostPasswordComponent {

  constructor(private http: HttpClient, private router: Router) { }

  userEmail: string = '';
  newPassword: string = '';

  updatePassword() {
    if (!this.userEmail || this.userEmail.trim() === '') {
      Swal.fire({ title: "Validation Error!", text: "Email is required!", icon: "error" });
      return;
    }

    if (!this.newPassword || this.newPassword.length < 6) {
      Swal.fire({ title: "Validation Error!", text: "Password must be at least 6 characters!", icon: "error" });
      return;
    }

    this.http.put(
      `http://localhost:8080/user/update-password/${this.userEmail}/${this.newPassword}`,
      {}
    ).subscribe({
      next: () => {
        Swal.fire({ title: "Success!", text: "Password updated!", icon: "success" })
          .then(() => this.router.navigate(['/login']));
      },
      error: () => {
        Swal.fire({ title: "Error!", text: "Email not found!", icon: "error" });
      }
    });
  }
}