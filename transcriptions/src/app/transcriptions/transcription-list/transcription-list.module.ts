import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranscriptionListComponent } from './transcription-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { TranscriptionModule } from './transcription/transcription.module';
import { TranscriptionService } from './transcription/transcription.service';
import { ButtonModule } from 'src/app/shared/components/button/button.module';

@NgModule({
  declarations: [TranscriptionListComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TranscriptionModule,
    ButtonModule
  ],
  exports: [TranscriptionListComponent],
  providers: [TranscriptionService]
})
export class TranscriptionListModule { }
