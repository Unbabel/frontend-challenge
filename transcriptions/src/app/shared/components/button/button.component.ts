import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ts-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Output('t-click') clicked = new EventEmitter();
  @Input('t-type') type: string = 'default';
  @Input('t-height') height: string = '24';
  @Input('t-width') width: string = '24';

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  onClick() {
    this.clicked.emit();
  }
}
