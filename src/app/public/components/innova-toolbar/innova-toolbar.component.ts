import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-innova-toolbar',
  standalone: false,
  templateUrl: './innova-toolbar.component.html',
  styleUrl: './innova-toolbar.component.scss'
})
export class InnovaToolbarComponent {

  constructor(private router: Router) { }

  goToReservarEspacio() {
    this.router.navigate(['reservar-espacio']).then();
  }

  goToConsultarReservas() {
    this.router.navigate(['consultar-reservas']).then();
  }
}
