import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueDateComponent } from './dynamique-date.component';

describe('DynamiqueDateComponent', () => {
  let component: DynamiqueDateComponent;
  let fixture: ComponentFixture<DynamiqueDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamiqueDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamiqueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
