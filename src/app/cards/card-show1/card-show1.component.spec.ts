import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShow1Component } from './card-show1.component';

describe('CardShow1Component', () => {
  let component: CardShow1Component;
  let fixture: ComponentFixture<CardShow1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShow1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShow1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
