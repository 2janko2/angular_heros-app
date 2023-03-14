import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(public messageService: MessageService) {

   }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add("Fetched Hero")
    return heroes;
  }
}