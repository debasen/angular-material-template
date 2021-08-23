import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input()aspectRatio:"1:1"|"5:4"|"4:3"|"3:2"|"16:9";
  

  constructor() { }

  ngOnInit(): void {
  }

}
