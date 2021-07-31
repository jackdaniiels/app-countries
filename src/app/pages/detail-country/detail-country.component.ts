import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryDetailModel, CountryModel } from 'src/app/models/CountryModel';
import { ContriesService } from 'src/app/services/contries.service';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.scss'],
})
export class DetailCountryComponent implements OnInit {
  public id: any = '';
  public country: CountryDetailModel = new CountryDetailModel();

  constructor(
    private route: ActivatedRoute,
    private _countriesService: ContriesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.handleSearchCountry(this.id);
  }

  public handleSearchCountry(country: string): void {
    this._countriesService.getCountryByName(country).subscribe(
      (country: CountryDetailModel[]) => {
        this.country = country[0];
      },
      (error: any) => {
        console.error(error);
        this.router.navigateByUrl('where-in-the-world');
      }
    );
  }
}
