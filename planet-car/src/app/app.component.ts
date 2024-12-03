import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VeiculosComponent } from './veiculos/veiculos.component'; 
 
 
 
 

 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  VeiculosComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'planet-car';
}
