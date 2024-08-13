import {Injectable} from '@angular/core';
import {Character} from "../interface/character.interface";
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[]=[
    {
      id:uuid(),
      name:'Goku',
      power:15000
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:14000
    },
    {
      id:uuid(),
      name:'Krillin',
      power:10000
    }
  ];
  addCharacter(character:Character){
    const newCharacter:Character={id: uuid(),...character};//...character indica que tome todos las propiedades del objeto y lo guarde
    this.characters.push(newCharacter);

  }
  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  };
  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);

  }
}
