import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaSpacesPageComponent } from './innova-spaces-page.component';

describe('InnovaSpacesPageComponent', () => {
  let component: InnovaSpacesPageComponent;
  let fixture: ComponentFixture<InnovaSpacesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnovaSpacesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovaSpacesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
