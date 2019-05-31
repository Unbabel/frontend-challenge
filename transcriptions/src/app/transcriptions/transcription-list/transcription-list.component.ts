import { Component, OnInit } from '@angular/core';
import { TranscriptionService } from './transcription/transcription.service';
import { Transcription } from './transcription/transcription';

@Component({
  selector: 'ts-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.css']
})
export class TranscriptionListComponent implements OnInit {

  private transcriptions:Transcription[] = [];

  constructor(private transcriptionService: TranscriptionService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.transcriptionService
      .listTranscriptions()
      .subscribe(transcriptions => {
        this.transcriptions = transcriptions;
      });    
  }

}
