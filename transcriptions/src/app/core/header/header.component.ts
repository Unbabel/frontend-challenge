import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('t-click-upload') uploadEmitter = new EventEmitter();
  @Output('t-click-fetch') fetchEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upload() {
    this.uploadEmitter.emit()
  }

  fetch() {
    this.fetchEmitter.emit()
  }


}
