import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { NgxToastStackComponent } from './ngx-toast-stack.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';



@NgModule({
  declarations: [
    NgxToastStackComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxToastStackComponent
  ]
})
export class NgxToastStackModule { }
