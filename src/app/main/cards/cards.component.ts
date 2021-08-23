import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  product: any;

  constructor(private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
  }

}
