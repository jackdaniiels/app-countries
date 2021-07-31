import { Component, OnInit } from '@angular/core';
import { CountryModel } from 'src/app/models/CountryModel';
import { ContriesService } from 'src/app/services/contries.service';

@Component({
  selector: 'app-where-in-the-world',
  templateUrl: './where-in-the-world.component.html',
  styleUrls: ['./where-in-the-world.component.scss'],
})
export class WhereInTheWorldComponent implements OnInit {
  public countries: Array<CountryModel> = [];
  public searchFilter: any = '';

  constructor(private _countriesService: ContriesService) {}

  ngOnInit(): void {
    this.handleCountries();
  }

  public handleCountries(): void {
    this._countriesService.getAllContries().subscribe(
      (countries: CountryModel[]) => {
        this.countries = countries;
      },
      (error: any) => {
        console.error(error);
        this.countries = [];
      }
    );
  }

  public handleSearchCountry(country: string): void {
    this.searchFilter = country;
    this._countriesService.getCountryByName(country).subscribe(
      (country: CountryModel[]) => {
        this.countries = country;
      },
      (error: any) => {
        console.error(error);
        this.countries = [];
        if(this.searchFilter.length <= 0) {
          this.handleCountries();
        }
      }
    );
  }

  public handleSelectRegion(region: string): void {
    this._countriesService.getCountryByRegion(region).subscribe(
      (countries: CountryModel[]) => {
        this.countries = countries;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
