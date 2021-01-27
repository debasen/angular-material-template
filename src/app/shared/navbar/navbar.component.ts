import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { MENU_ITEMS } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private titleList: any[];
  sticky : boolean = false;

  constructor(private location: Location, private navService: NavigationService, private router : Router) { }

  ngOnInit(): void {
    this.titleList = MENU_ITEMS.map(item=>item);
  }

  getTitle(){
    var currentUrl = this.location.prepareExternalUrl(this.location.path());
    if(currentUrl.charAt(0) === '#'){
        currentUrl = currentUrl.slice( 1 );
    }

    for(var item = 0; item < this.titleList.length; item++){
        if(this.titleList[item].url === currentUrl){
            return this.titleList[item].title;
        }
        if(this.titleList[item].subMenu && this.titleList[item].subMenu.length > 0){
          var subMenuItem = this.titleList[item].subMenu.find(sm=>sm.url === currentUrl);
          if(subMenuItem){
            return subMenuItem.title;
          }
        }
    }
    return 'Dashboard';
  }

  toggleSidebar(){
    this.navService.toggleSidebar();
  }

  logout(){
    this.router.navigate(['pages','login']);
  }
}
