import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { TranscriptionService } from './transcription/transcription.service';
import { Transcription } from './transcription/transcription';
import { TranscriptionComponent } from './transcription/transcription.component';

@Component({
  selector: 'ts-transcription-list',
  templateUrl: './transcription-list.component.html',
  styleUrls: ['./transcription-list.component.css']
})
export class TranscriptionListComponent implements OnInit {

  private transcriptions:Transcription[] = [];

  @ViewChildren(TranscriptionComponent) transcriptionItems: QueryList<TranscriptionComponent>;

  constructor(private transcriptionService: TranscriptionService) { }

  ngOnInit() {
    
  }

  loadTranscriptions() {
    this.transcriptionService
      .getTranscriptions()
      .subscribe(transcriptions => {
        this.transcriptions = transcriptions;
      });    
  }

  submitTranscriptions() {
    let transcriptionToSubmit: Transcription[] = [];

    this.transcriptionItems.forEach(
      item => {
        let transcription:Transcription = {
          'id':item.id,
          'voice': item.title,
          'text': item.transcription
        }
      
        transcriptionToSubmit.push(transcription);
      });
    
    if (transcriptionToSubmit.length){
      this.transcriptionService
        .submitTranscriptions(transcriptionToSubmit)
        .subscribe();
    }
    
  }

  deleteTranscription(index: number) {
    this.transcriptions.splice(index,1)
  }

  addTranscription(){
    let id: number;
    let newTranscription: Transcription = {
      'id': id ,
      'voice': 'Your text here!',
      'text': 'Your text here!'
    }

    this.transcriptions = [...this.transcriptions,newTranscription ]
  }

}
