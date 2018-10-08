import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFoodComponent } from './customize-food.component';

describe('CustomizeFoodComponent', () => {
  let component: CustomizeFoodComponent;
  let fixture: ComponentFixture<CustomizeFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
