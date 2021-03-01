import { Component, OnInit } from '@angular/core';
import { openCloseAnimation } from '../helper/animations/open-close';

@Component({
  selector: 'open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [openCloseAnimation],
})
export class OpenCloseComponent implements OnInit {
  isOpen = true;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
