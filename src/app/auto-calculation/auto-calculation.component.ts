import { Component, Input, OnInit } from '@angular/core';
import { schrinkOut } from '../helper/animations/schrink-out';

@Component({
  selector: 'auto-calculation',
  templateUrl: './auto-calculation.component.html',
  styleUrls: ['./auto-calculation.component.css'],
  animations: [schrinkOut],
})
export class AutoCalculationComponent implements OnInit {
  heroes: { id: number; name: string }[] = [
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
    this.heroes.splice(index, 1);
    console.log(index);
  }
}
