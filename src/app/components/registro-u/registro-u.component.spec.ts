import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUComponent } from './registro-u.component';

describe('RegistroUComponent', () => {
  let component: RegistroUComponent;
  let fixture: ComponentFixture<RegistroUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroUComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
