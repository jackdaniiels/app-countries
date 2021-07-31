import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { WhereInTheWorldComponent } from './pages/where-in-the-world/where-in-the-world.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DarkmodeButtonComponent } from './components/darkmode-button/darkmode-button.component';
import { TransparentButtonComponent } from './components/transparent-button/transparent-button.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    FilterComponent,
    WhereInTheWorldComponent,
    NavbarComponent,
    SearchFilterPipe,
    DetailCountryComponent,
    BackButtonComponent,
    DarkmodeButtonComponent,
    TransparentButtonComponent,
    NoResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
