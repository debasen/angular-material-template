import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-letter-icon',
  templateUrl: './letter-icon.component.html',
  styleUrls: ['./letter-icon.component.scss']
})
export class LetterIconComponent implements OnInit {
  @Input() title : String;
  @Input() size : 'small' | 'normal' | 'large' = 'normal';
  abbr : string;

  constructor() { }

  ngOnInit(): void {
    let segments = this.title.split(" ");
    this.abbr = segments.length >1 ? segments[0].charAt(0)+segments[1].charAt(0) : segments[0].charAt(0);
  }

}
