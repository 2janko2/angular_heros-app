import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.subscriptions.add(this.heroService.getHeroes().subscribe({
      next: (heroes) => {
        this.heroes = heroes.slice(1, 5);
      }
    }))
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
