import { Component, OnInit, ViewChild } from '@angular/core';
import { TranscriptionListComponent } from '../transcriptions/transcription-list/transcription-list.component';

@Component({
  selector: 'ts-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(TranscriptionListComponent) transcriptionListComponent:TranscriptionListComponent;

  private title: string = 'transcriptions';

  constructor() { }

  ngOnInit() {
  }

  upload() {
    this.transcriptionListComponent.submitTranscriptions();
  }

  fetch() {
    this.transcriptionListComponent.loadTranscriptions();
  }

}
