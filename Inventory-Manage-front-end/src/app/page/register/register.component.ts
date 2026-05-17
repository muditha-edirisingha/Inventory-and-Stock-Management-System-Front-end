import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private http: HttpClient, private router: Router) { }

  public user: any = {
    userId: "",
    userEmail: "",
    password: "",
    name: "",
  }

  validate(): boolean {
    if (!this.user.name || this.user.name.trim() === '') {
      Swal.fire({
        title: "Validation Error!",
        text: "Name is required!",
        icon: "error"
      });
      return false;
    }

    if (!this.user.userEmail || this.user.userEmail.trim() === '') {
      Swal.fire({
        title: "Validation Error!",
        text: "Email is required!",
        icon: "error"
      });
      return false;
    }

    // Email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.user.userEmail)) {
      Swal.fire({
        title: "Validation Error!",
        text: "Please enter a valid email address!",
        icon: "error"
      });
      return false;
    }

    if (!this.user.password || this.user.password.trim() === '') {
      Swal.fire({
        title: "Validation Error!",
        text: "Password is required!",
        icon: "error"
      });
      return false;
    }

    if (this.user.password.length < 6) {
      Swal.fire({
        title: "Validation Error!",
        text: "Password must be at least 6 characters!",
        icon: "error"
      });
      return false;
    }

    return true;
  }

  addUser() {
    if (!this.validate()) return;

    
    this.http.get<any[]>("http://localhost:8080/user/get-all-users")
      .subscribe({
        next: (users: any[]) => {


          const emailExists = users.some(
            (u) => u.userEmail === this.user.userEmail
          );

          if (emailExists) {
            Swal.fire({
              title: "Email Already Exists!",
              text: "This email is already registered!",
              icon: "error"
            });
          } else {

            this.http.post("http://localhost:8080/user/add-user", this.user)
              .subscribe({
                next: () => {
                  Swal.fire({
                    title: "Good job!",
                    text: "Registered successfully!",
                    icon: "success"
                  }).then(() => {
                    this.router.navigate(['/login']);
                  });
                },
                error: () => {
                  Swal.fire({ title: "Error!", text: "Registration failed!", icon: "error" });
                }
              });
          }
        },
        error: () => {
          Swal.fire({ title: "Error!", text: "Something went wrong!", icon: "error" });
        }
      });
  }
}