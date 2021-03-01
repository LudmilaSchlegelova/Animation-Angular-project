import { Component, OnInit } from '@angular/core';
import { flyInOut2 } from '../helper/animations/fly-in-out-2';

@Component({
  selector: 'hero-groups',
  templateUrl: './hero-groups.component.html',
  styleUrls: ['./hero-groups.component.css'],
  animations: [flyInOut2],
})
export class HeroGroupsComponent implements OnInit {
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
