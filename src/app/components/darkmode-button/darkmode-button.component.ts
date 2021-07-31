import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-darkmode-button',
  templateUrl: './darkmode-button.component.html',
  styleUrls: ['./darkmode-button.component.scss']
})
export class DarkmodeButtonComponent implements OnInit {

  @Input() text: string = 'Dark Mode';
  public darkModeActive: boolean = false;

  constructor(private _subject: SubjectService) { }

  ngOnInit(): void {
  }

  handleToggleDarkMode(): void {
    this.darkModeActive = !this.darkModeActive;
    this._subject.toggleDarkMode(this.darkModeActive);
  }

}
