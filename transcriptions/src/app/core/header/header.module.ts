import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
