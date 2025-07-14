import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarEspacioPageComponent } from './reservar-espacio-page.component';

describe('ReservarEspacioPageComponent', () => {
  let component: ReservarEspacioPageComponent;
  let fixture: ComponentFixture<ReservarEspacioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservarEspacioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarEspacioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
