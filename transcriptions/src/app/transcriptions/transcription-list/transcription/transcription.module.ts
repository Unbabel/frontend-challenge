import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { TranscriptionComponent } from './transcription.component';

@NgModule({
  declarations: [TranscriptionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [TranscriptionComponent],
})
export class TranscriptionModule { }
