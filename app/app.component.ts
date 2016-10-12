import { Component } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  moduleId: module.id, // required when use: "templateUrl"
  selector: 'my-app',
  templateUrl: 'templates/heroes.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
