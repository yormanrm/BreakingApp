import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  page: number = 0;
  @Input() charsIn !: Character[];
  @Output() pagen = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  nextPage(){
    if(this.charsIn != null){
        this.page += 5;
        this.pagen.emit(this.page);
    }
  }

  prevPage(){
      if(this.page > 0){
          this.page -=5;
          this.pagen.emit(this.page);
      }
  }

}
