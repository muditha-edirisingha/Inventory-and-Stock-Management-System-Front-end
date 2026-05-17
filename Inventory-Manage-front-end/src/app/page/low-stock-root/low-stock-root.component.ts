import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-low-stock-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterLink],
  templateUrl: './low-stock-root.component.html',
  styleUrl: './low-stock-root.component.css'
})
export class LowStockRootComponent {

}
