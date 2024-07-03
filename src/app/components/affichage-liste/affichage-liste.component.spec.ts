import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageListeComponent } from './affichage-liste.component';

describe('AffichageListeComponent', () => {
  let component: AffichageListeComponent;
  let fixture: ComponentFixture<AffichageListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichageListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
