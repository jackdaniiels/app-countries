import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private activeDarkMode = new Subject<boolean>();
  public activeDarkMode$ = this.activeDarkMode.asObservable();

  constructor() { }

  toggleDarkMode(toggle: boolean): void {
    this.activeDarkMode.next(toggle);
  }
}
