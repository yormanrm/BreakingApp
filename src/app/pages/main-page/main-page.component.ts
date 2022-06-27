import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  characters!: Character[];
  charactersCopy!: Character[];
  pagec: number = 0;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    await this.api.getCharacters().subscribe((data) => {
      this.characters = data.map(({ char_id, name, nickname, portrayed, status, occupation, img } : Character) =>{ //descomposición de objetos para solo cargar los datos que se necesitan
        return{
          char_id: char_id,
          name: name,
          nickname: nickname,
          portrayed: portrayed,
          status: status,
          occupation: occupation,
          img: img
        };
      });
      this.charactersCopy = this.characters; //copia de los personajes cargados para no modificar el arreglo principal
    });
  }

  searchBar(e : any){
    const search:string = e.target.value;
    this.pagec = 0;
    this.characters = this.charactersCopy?.filter(({name}:Character) =>{
      return name.toLowerCase().includes(search.toLowerCase())
    });
  }

  setPage(page: any) {
    this.pagec = page
  }

}
