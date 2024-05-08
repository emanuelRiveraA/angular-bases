import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age:  number = 45; 

  getHeroDescription(): string{
    return `${ this.name } - ${ this.age }`;
  }

  //los get() se ven exactamente igual como propiedades
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }


}
