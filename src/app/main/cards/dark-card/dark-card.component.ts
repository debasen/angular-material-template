import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-card',
  templateUrl: './dark-card.component.html',
  styleUrls: ['./dark-card.component.scss']
})
export class DarkCardComponent implements OnInit {
  @Input() color: string= "primary";
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
