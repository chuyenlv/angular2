import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  moduleId: module.id, // required when use: "templateUrl"
  selector: 'my-app',
  templateUrl: 'templates/hero-detail.component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
