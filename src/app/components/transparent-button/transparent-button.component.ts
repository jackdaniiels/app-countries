import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  templateUrl: './transparent-button.component.html',
  styleUrls: ['./transparent-button.component.scss']
})
export class TransparentButtonComponent implements OnInit {
  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
