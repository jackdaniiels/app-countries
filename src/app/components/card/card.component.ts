import { Component, Input, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/CountryModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() country: CountryModel = new CountryModel();

  constructor() { }

  ngOnInit(): void {
  }

}
