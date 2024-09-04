import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkComponent } from './pk.component';

describe('PkComponent', () => {
  let component: PkComponent;
  let fixture: ComponentFixture<PkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
