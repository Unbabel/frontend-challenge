import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/header/header.module';
import { TranscriptionListModule } from './transcriptions/transcription-list/transcription-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HeaderModule,
    TranscriptionListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
