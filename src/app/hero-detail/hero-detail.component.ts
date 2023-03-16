import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  @Input() hero!: Hero;

  getHero() {
    const heroId = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(heroId).subscribe({
      next: (hero) => {
        this.hero = hero
      }
    })
  }

  goBack() {
    this.location.back();
  }
}