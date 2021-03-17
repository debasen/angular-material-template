import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-cards',
  templateUrl: './advanced-cards.component.html',
  styleUrls: ['./advanced-cards.component.scss']
})
export class AdvancedCardsComponent implements OnInit {
  chart1 = {
    data: [10.2, 32.45, 11.2, 23.7, 15.8, 42.5],
    labels: ['A', 'B', 'C', 'D', 'E', 'F']
  };

  constructor() { }

  ngOnInit(): void {
  }

}
