export class CountryModel {
  capital: string  = '';
  name: string = '';
  flag: string= '';
  population: number = 0;
  region: string = '';
}


export class CountryDetailModel {
  capital: string  = '';
  name: string = '';
  borders: [] = [];
  currencies: [] = [];
  flag: string= '';
  population: number = 0;
  region: string = '';
  nativeName: string = '';
  topLevelDomain: [] = [];
  subregion: string = '';
  languages: [] = [];
}
