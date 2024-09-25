import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GUsuariosComponent } from './gusuarios.component';

describe('GUsuariosComponent', () => {
  let component: GUsuariosComponent;
  let fixture: ComponentFixture<GUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
