import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

               //el servicio no debe de ser publico
    constructor(private dbzService: DbzService){

    }

    //los get no se llaman como metodos en el HTML osea no lleva parentesis
    get characters(): Character[]{
        return [...this.dbzService.characters];//se crea una copia con el spread
    }

    onDeleteCharacter( id: string ): void {
        this.dbzService.onDeleteCharacterById(id);
    }

    onNewCharacter( character: Character): void {
        this.dbzService.addCharacter(character);
    }



}
