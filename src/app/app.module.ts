import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnovaSpacesPageComponent } from './reservations/pages/innova-spaces-page/innova-spaces-page.component';
import { InnovaToolbarComponent } from './public/components/innova-toolbar/innova-toolbar.component';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import { AccordionModule } from 'primeng/accordion';
import { ReservarEspacioPageComponent } from './reservations/pages/reservar-espacio-page/reservar-espacio-page.component';
import { ConsultarReservasPageComponent } from './reservations/pages/consultar-reservas-page/consultar-reservas-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {SelectModule} from 'primeng/select';

@NgModule({
  declarations: [
    AppComponent,
    InnovaSpacesPageComponent,
    InnovaToolbarComponent,
    ReservarEspacioPageComponent,
    ConsultarReservasPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CommonModule,
    BrowserModule,
    SelectModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
