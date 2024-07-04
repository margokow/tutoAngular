import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentEnfantComponent } from './component-enfant.component';

describe('ComponentEnfantComponent', () => {
  let component: ComponentEnfantComponent;
  let fixture: ComponentFixture<ComponentEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentEnfantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
