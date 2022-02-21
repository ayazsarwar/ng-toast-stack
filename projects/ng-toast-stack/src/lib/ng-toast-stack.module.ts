import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NgToastStackComponent } from './ng-toast-stack.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';



@NgModule({
  declarations: [
    NgToastStackComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgToastStackComponent
  ]
})
export class NgToastStackModule { }
