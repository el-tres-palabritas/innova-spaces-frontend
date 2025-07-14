import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InnovaSpacesPageComponent} from './reservations/pages/innova-spaces-page/innova-spaces-page.component';
import {ReservarEspacioPageComponent} from './reservations/pages/reservar-espacio-page/reservar-espacio-page.component';
import {ConsultarReservasPageComponent} from './reservations/pages/consultar-reservas-page/consultar-reservas-page.component';

const routes: Routes = [
  {path: '', component: InnovaSpacesPageComponent},
  {path: 'reservar-espacio', component: ReservarEspacioPageComponent},
  {path: 'consultar-reservas', component: ConsultarReservasPageComponent},
  {path: '**', component: InnovaSpacesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
