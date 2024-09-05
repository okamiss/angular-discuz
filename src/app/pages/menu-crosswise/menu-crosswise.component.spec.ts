import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCrosswiseComponent } from './menu-crosswise.component';

describe('MenuCrosswiseComponent', () => {
  let component: MenuCrosswiseComponent;
  let fixture: ComponentFixture<MenuCrosswiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuCrosswiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCrosswiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
