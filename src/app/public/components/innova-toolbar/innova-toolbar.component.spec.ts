import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovaToolbarComponent } from './innova-toolbar.component';

describe('InnovaToolbarComponent', () => {
  let component: InnovaToolbarComponent;
  let fixture: ComponentFixture<InnovaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnovaToolbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnovaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
