import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxToastStackComponent } from './ngx-toast-stack.component';

describe('NgxToastStackComponent', () => {
  let component: NgxToastStackComponent;
  let fixture: ComponentFixture<NgxToastStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxToastStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
