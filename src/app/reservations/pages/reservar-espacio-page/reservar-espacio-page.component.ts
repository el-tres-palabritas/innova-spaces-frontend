import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reservar-espacio-page',
  standalone: false,
  templateUrl: './reservar-espacio-page.component.html',
  styleUrl: './reservar-espacio-page.component.css'
})
export class ReservarEspacioPageComponent implements OnInit {
  selectedType: string = '';
  types: Array<string> = [
    "Fútbol",
    "Voley",
    "Ajedrez"
  ]

  reservationForm: FormGroup = new FormGroup({
    id: new FormControl(1),
    type: new FormControl('', [Validators.required]),
    quantity: new FormControl(0, [Validators.required, Validators.min(1)]),
    zone: new FormControl('', [Validators.required])
  })
  constructor() {}

  ngOnInit() {

  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      alert('¡Espacio reservado exitosamente!');
    } else {
      this.reservationForm.markAllAsTouched();
    }
  }
}
