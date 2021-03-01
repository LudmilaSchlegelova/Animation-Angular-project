import { Component, Input, OnInit } from '@angular/core';

interface NameProps {
  name: string;
  id: number;
}

@Component({
  selector: 'enter-leave-item',
  templateUrl: './enter-leave-item.component.html',
  styleUrls: ['./enter-leave-item.component.css'],
})
export class EnterLeaveItemComponent implements OnInit {
  @Input('name') name: NameProps;
  @Input('zIndex') zIndex: number;

  constructor() {}

  ngOnInit(): void {}
}
