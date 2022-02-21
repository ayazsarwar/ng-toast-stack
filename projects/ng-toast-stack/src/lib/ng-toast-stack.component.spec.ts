/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgToastStackComponent } from './ng-toast-stack.component';

describe('NgToastStackComponent', () => {
  let component: NgToastStackComponent;
  let fixture: ComponentFixture<NgToastStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgToastStackComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgToastStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
