import { Injectable } from '@angular/core';
import { SelectModel } from '../models/SelectModel';

@Injectable({
  providedIn: 'root',
})
export class SelectsService {
  public selectRegionOptions: SelectModel[] = [
    { description: 'Africa', value: 'Africa' },
    { description: 'Americas', value: 'Americas' },
    { description: 'Asia', value: 'Asia' },
    { description: 'Europe', value: 'Europe' },
    { description: 'Oceania', value: 'Oceania' },
  ];

  constructor() {}
}
