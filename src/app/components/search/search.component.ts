import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() onSearchCountry: EventEmitter<string> = new EventEmitter<string>();
  public textSearch: string = '';

  constructor() {}

  ngOnInit(): void {}

  public handleSearchCountry(textSearch: string): void {
    this.onSearchCountry.emit(textSearch);
  }
}
