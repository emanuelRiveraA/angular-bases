import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Emitir el ID del personaje para borrarlo
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()  //se recibe desde main-page
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }]
                    // ? que puede o no venir
  onDeleteCharacter( id?: string): void{
    //TODO: emitir el ID del personaje
    // console.log({id});

    if(!id) return;//si no tengo un id no hago nada

    this.onDelete.emit(id);

  }

}
