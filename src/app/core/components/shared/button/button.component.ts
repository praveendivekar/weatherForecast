import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  // input to the component
  @Input() disabled: boolean;

  // emitter from the component on click
  @Output() handleButtonClick = new EventEmitter<{ event: Event }>();

  constructor() { }

  ngOnInit() {}

  /**
   * method to emit the click event on user input on button component
   * @method handleClickEvent
   * @param event - event passed from the template
   * @return none
   */
  public handleClickEvent(event: Event): void {
    this.handleButtonClick.emit({ event });
  }
}
