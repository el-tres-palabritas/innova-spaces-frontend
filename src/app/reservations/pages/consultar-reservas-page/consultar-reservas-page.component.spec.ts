import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarReservasPageComponent } from './consultar-reservas-page.component';

describe('ConsultarReservasPageComponent', () => {
  let component: ConsultarReservasPageComponent;
  let fixture: ComponentFixture<ConsultarReservasPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarReservasPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarReservasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
