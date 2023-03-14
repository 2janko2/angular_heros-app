import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };

  heroes: Hero[] = HEROES;

  selectedHero!: Hero;

  onSelectedHero(hero: Hero){
    debugger;
    this.selectedHero = hero;
  }
}
