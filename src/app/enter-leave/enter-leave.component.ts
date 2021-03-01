import { Component, OnInit } from '@angular/core';
import { flyInOutAnimation } from 'src/app/helper/animations/fly-in-out';

@Component({
  selector: 'enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.css'],
  animations: [flyInOutAnimation],
})
export class EnterLeaveComponent implements OnInit {
  names: { id: number; name: string }[] = [
    { id: 1, name: 'Dr Nico' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' },
  ];

  constructor() {}

  ngOnInit(): void {}

  deleteItem(index) {
    this.names.splice(index, 1);
    console.log(index);
  }
}
