import { Component, HostBinding, OnInit } from '@angular/core';
import { filterAnimation } from '../helper/animations/filter';
import { pageAnimation } from '../helper/animations/page';

@Component({
  selector: 'filter-stagger',
  templateUrl: './filter-stagger.component.html',
  styleUrls: ['./filter-stagger.component.css'],
  animations: [pageAnimation, filterAnimation],
})
export class FilterStaggerComponent implements OnInit {
  @HostBinding('@pageAnimations')
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

  _heroes = this.heroes;
  totalHeroes = -1;

  constructor() {}

  ngOnInit(): void {}

  filterHeroes(value) {
    value = value ? value.trim() : '';

    this.heroes = this._heroes.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    const newTotal = this.heroes.length;
    if (this.totalHeroes !== newTotal) {
      this.totalHeroes = newTotal;
    } else if (!value) {
      this.totalHeroes = -1;
    }
  }
}
