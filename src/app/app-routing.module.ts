import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { WhereInTheWorldComponent } from './pages/where-in-the-world/where-in-the-world.component';

const routes: Routes = [
  { path: 'where-in-the-world', component: WhereInTheWorldComponent },
  { path: 'where-in-the-world/:id', component: DetailCountryComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/where-in-the-world' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
