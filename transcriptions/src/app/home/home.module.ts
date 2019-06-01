import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { TranscriptionListModule } from '../transcriptions/transcription-list/transcription-list.module';
import { HeaderModule } from '../core/header/header.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HeaderModule,
    TranscriptionListModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
