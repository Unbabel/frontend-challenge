import { Component, OnInit, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'ts-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  
  private checked: boolean = false;

  @Output('t-checked') checkedEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.checked = !this.checked;
    this.checkedEmitter.emit(this.checked);
  }

}
