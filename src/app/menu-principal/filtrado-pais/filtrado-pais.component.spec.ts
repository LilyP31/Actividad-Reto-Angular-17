import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoPaisComponent } from './filtrado-pais.component';

describe('FiltradoPaisComponent', () => {
  let component: FiltradoPaisComponent;
  let fixture: ComponentFixture<FiltradoPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltradoPaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltradoPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
