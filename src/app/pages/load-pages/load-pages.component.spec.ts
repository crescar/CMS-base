import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPagesComponent } from './load-pages.component';

describe('LoadPagesComponent', () => {
  let component: LoadPagesComponent;
  let fixture: ComponentFixture<LoadPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
