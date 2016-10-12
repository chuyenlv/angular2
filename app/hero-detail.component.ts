import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: 'templates/hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}