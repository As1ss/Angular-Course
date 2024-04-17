import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-heroe-page',
  templateUrl: './heroe-page.component.html',
  styles: ``,
})
export class HeroPageComponent implements OnInit {

  public hero?:Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router:Router
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      delay(300),
      switchMap(params=>this.heroesService.getHeroById(params['id'])),
    )
    .subscribe(hero=> {
      if (!hero) return this.router.navigate(['/heroes/list'])

       return this.hero=hero;
    })
  }

  goBack():void{
    this.router.navigateByUrl("heroes/list");
  }
}
