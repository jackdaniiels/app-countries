import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkmodeButtonComponent } from './darkmode-button.component';

describe('DarkmodeButtonComponent', () => {
  let component: DarkmodeButtonComponent;
  let fixture: ComponentFixture<DarkmodeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkmodeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkmodeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
