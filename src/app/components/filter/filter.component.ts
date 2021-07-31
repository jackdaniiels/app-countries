import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SelectModel } from 'src/app/models/SelectModel';
import { SelectsService } from 'src/app/services/selects.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public regionOptions: SelectModel[] = [];
  public regionSelected: string = '';
  @Output() onChangeRegion: EventEmitter<string> = new EventEmitter<string>();

  constructor(public _selectsService: SelectsService) {
    this.regionOptions = this._selectsService.selectRegionOptions;
  }

  ngOnInit(): void {}

  public handleSelectRegion(regionSelected: string): void {
    this.onChangeRegion.emit(regionSelected);
  }
}
