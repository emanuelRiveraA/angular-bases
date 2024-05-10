import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid"; // primero ejecute "npm install uuid" luego "npm i --save-dev @types/uuid"

import { Character } from '../interfaces/character.interface';

//providedIn ---> esta disponible en toda la aplicación
@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 1000
        },
        {
            id: uuid(),
            name:'Goku',
            power: 9500
        },
        {
            id: uuid(),
            name:'Vegeta',
            power: 7500
        }
    ];

    addCharacter( character: Character ): void {
                                                    //toma todas sus propiedades y esparcelas en este nuevo objeto que estoy creando
        const newCharacter: Character = { id: uuid(), ...character};
        this.characters.push(newCharacter);
    }

    //ya vale porque hay que borrar el id no el indice
    // onDeleteCharacter( index: number): void {
    //                         //remove 1 element at index(index)
    //     this.characters.splice(index,1);
    // }

    onDeleteCharacterById( id: string): void {
        this.characters = this.characters.filter( character => character.id !== id);
    }
}