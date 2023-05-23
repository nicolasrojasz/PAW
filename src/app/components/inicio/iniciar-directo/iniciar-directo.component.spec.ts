import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarDirectoComponent } from './iniciar-directo.component';

describe('IniciarDirectoComponent', () => {
  let component: IniciarDirectoComponent;
  let fixture: ComponentFixture<IniciarDirectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarDirectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciarDirectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
