/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgxToastStackComponent } from './ngx-toast-stack.component';

describe('NgxToastStackComponent', () => {
  let component: NgxToastStackComponent;
  let fixture: ComponentFixture<NgxToastStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxToastStackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxToastStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
