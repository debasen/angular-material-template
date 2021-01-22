import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-hamburger-icon',
  templateUrl: './hamburger-icon.component.html',
  styleUrls: ['./hamburger-icon.component.scss']
})
export class HamburgerIconComponent implements OnInit {
  @Input() type : 'cross' | 'left-arrow'| 'right-arrow' | 'flat' = 'right-arrow';
  @Input() reverse : boolean = false;
  @Output() clicked = new EventEmitter<any>();
  subscription : Subscription;
  state : 'ham-closed' | 'ham-opened';
  

  constructor(private navService : NavigationService) { }

  ngOnInit(): void {
    this.screenWidthCheck(window.innerWidth);
    this.subscription = this.navService.sidebarState().subscribe(isOpen=>{
      this.state = isOpen ? 'ham-opened' : 'ham-closed';
    });
  }

  screenWidthCheck(windowWidth : number){
    if(windowWidth<environment.screenWidth[environment.closeSidebarBelow]){
      this.state = this.reverse ? 'ham-opened' : 'ham-closed';
    }
    if(windowWidth>environment.screenWidth[environment.closeSidebarBelow]){
      this.state = this.reverse ? 'ham-closed' : 'ham-opened';
    }
  }
  // onClick(){
  //   this.reverse = !this.reverse;
  //   this.clicked.emit();
  // }

}
