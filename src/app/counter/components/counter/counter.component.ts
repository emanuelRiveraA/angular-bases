import { Component } from "@angular/core";


//este componente asi como esta necesita ser parte de un modulo
@Component({
    selector:'app-counter',
    template:`
        <h3>Counter: {{counter}}</h3>

        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="resetCounter()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    
    `,
})
export class CounterComponent{//este es el nombre que se pone en app.module.ts

  public counter: number = 10;

  increaseBy(value: number): void{
    this.counter += value;
  }

  resetCounter(): void{
    this.counter=10;
  }


}