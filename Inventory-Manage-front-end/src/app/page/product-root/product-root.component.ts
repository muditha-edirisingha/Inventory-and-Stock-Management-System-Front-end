import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-product-root',
  standalone: true,
  imports: [FormsModule, RouterLink,RouterOutlet],
  templateUrl: './product-root.component.html',
  styleUrl: './product-root.component.css'
})
export class ProductRootComponent {

}
