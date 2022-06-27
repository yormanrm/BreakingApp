import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent implements OnInit {

  @Input() characterIn !: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
