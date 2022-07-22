import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcumuladoMisplatosComponent } from './acumulado-misplatos.component';

describe('AcumuladoMisplatosComponent', () => {
  let component: AcumuladoMisplatosComponent;
  let fixture: ComponentFixture<AcumuladoMisplatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcumuladoMisplatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcumuladoMisplatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
