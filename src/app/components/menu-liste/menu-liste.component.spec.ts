import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListeComponent } from './menu-liste.component';

describe('MenuListeComponent', () => {
  let component: MenuListeComponent;
  let fixture: ComponentFixture<MenuListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
