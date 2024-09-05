import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbnormalComponent } from './abnormal.component';

describe('AbnormalComponent', () => {
  let component: AbnormalComponent;
  let fixture: ComponentFixture<AbnormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbnormalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
