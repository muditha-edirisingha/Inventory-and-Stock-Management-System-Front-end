import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router) { }

  public loginData: any = {
    userEmail: "",
    password: ""
  }

  validate(): boolean {
    if (!this.loginData.userEmail || this.loginData.userEmail.trim() === '') {
      Swal.fire({ title: "Validation Error!", text: "Email is required!", icon: "error" });
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.loginData.userEmail)) {
      Swal.fire({ title: "Validation Error!", text: "Please enter a valid email!", icon: "error" });
      return false;
    }

    if (!this.loginData.password || this.loginData.password.trim() === '') {
      Swal.fire({ title: "Validation Error!", text: "Password is required!", icon: "error" });
      return false;
    }

    return true;
  }

  login() {
    if (!this.validate()) return;

    this.http.get<any[]>(`http://localhost:8080/user/get-user/${this.loginData.userEmail}`)
      .subscribe({
        next: (users: any[]) => {
          if (users && users.length > 0) {
            if (users[0].password === this.loginData.password) {
              Swal.fire({ title: "Welcome!", text: "Login successful!", icon: "success" })
                .then(() => this.router.navigate(['/dashboard']));
            } else {
              Swal.fire({ title: "Error!", text: "Invalid password!", icon: "error" });
            }
          } else {
            Swal.fire({ title: "Error!", text: "User not found!", icon: "error" });
          }
        },
        error: () => {
          Swal.fire({ title: "Error!", text: "User not found!", icon: "error" });
        }
      });
  }
}