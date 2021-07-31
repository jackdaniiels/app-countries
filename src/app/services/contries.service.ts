import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CountryDetailModel, CountryModel } from '../models/CountryModel';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {

  private urlApi: string = '';

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getAllContries() {
    return this.http.get<CountryModel[]>(`${this.urlApi}/all`);
  }

  getCountryByName(name: string) {
    return this.http.get<CountryDetailModel[]>(`${this.urlApi}/name/${name}`)
  }

  getCountryByRegion(region: string) {
    return this.http.get<CountryModel[]>(`${this.urlApi}/region/${region}`)
  }

}
