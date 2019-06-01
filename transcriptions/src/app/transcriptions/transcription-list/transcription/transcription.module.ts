import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptionComponent } from './transcription.component';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [TranscriptionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ButtonModule
  ],
  exports: [TranscriptionComponent],
})
export class TranscriptionModule { }
