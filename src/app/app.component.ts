import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from './services/subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'appSearchContries';
  public subs1: Subscription = new Subscription();
  public activeDarkMode$ = this._subject.activeDarkMode$;

  constructor(public _subject: SubjectService) {}
}
