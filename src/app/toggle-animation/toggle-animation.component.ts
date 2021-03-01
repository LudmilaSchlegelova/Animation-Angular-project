import { Component, OnInit } from '@angular/core';
import { openCloseAnimation2 } from '../helper/animations/open-close2';

@Component({
  selector: 'toggle-animation',
  templateUrl: './toggle-animation.component.html',
  styleUrls: ['./toggle-animation.component.css'],
  animations: [openCloseAnimation2],
})
export class ToggleAnimationComponent implements OnInit {
  isOpen = true;
  isDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  animationOnOff() {
    this.isDisabled = !this.isDisabled;
  }
}
