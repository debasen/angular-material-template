import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dark-card',
  templateUrl: './dark-card.component.html',
  styleUrls: ['./dark-card.component.scss']
})
export class DarkCardComponent implements OnInit {
  @Input() color: string= "primary";
  @Input() title: string;
  @Input() picker : boolean = false;
  @Input() icon : string; // Set to 'letter' for letter icon
  @Input() footerAlign : 'left' | 'center' | 'right' = 'right';
  @Input() mode : 'full' | 'header' = 'full';
  @Input() header : 'raised' | 'flat' = 'flat';
  // customHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
