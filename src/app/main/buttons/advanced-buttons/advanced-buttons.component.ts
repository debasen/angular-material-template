import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-buttons',
  templateUrl: './advanced-buttons.component.html',
  styleUrls: ['./advanced-buttons.component.scss'],
})
export class AdvancedButtonsComponent implements OnInit {

  loading1 = { b1: false, b2: false, b3: false, b4: false };
  loading2 = { b1: false, b2: false, b3: false, b4: false };

  constructor() { }

  ngOnInit(): void {
  }

  startLoading1(button: number) {
    this.loading1['b' + button] = true;
    setTimeout(() => {
      this.loading1['b' + button] = false
    }, 1000);
  }

  startLoading2(button: number) {
    this.loading2['b' + button] = true;
    setTimeout(() => {
      this.loading2['b' + button] = false
    }, 1000);
  }
}