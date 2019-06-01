import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-transcription',
  templateUrl: './transcription.component.html',
  styleUrls: ['./transcription.component.css']
})
export class TranscriptionComponent implements OnInit {
  public hover: boolean = false;

  @Output('t-delete') delete = new EventEmitter();
  @Input('t-id')  id: number; 
  @Input('t-title') title: string = "";
  @Input('t-transcription') transcription: string = "";

  constructor() { }

  ngOnInit() {
  }
  
  @HostListener('mouseenter')
  mouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.hover = false;
  }

  deleteTranscription() {
    this.delete.emit()
  }
}
