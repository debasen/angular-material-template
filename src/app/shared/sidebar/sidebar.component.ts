import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

export const MENU_ITEMS: Array<SidebarItem> = [
  { icon: 'home', title: 'Dashboard', url: '/main/dashboard' },
  {
    icon: 'collections_bookmark', title: 'Pages', subMenu: [
      { icon: 'account_circle', title: 'Login', url: '/pages/login' },
      { icon: 'chrome_reader_mode', title : 'Register', url: '/pages/register'}
    ]
  },
  {
    icon: 'description', title: 'Forms', subMenu: [
      { icon: 'description', title: 'Basic Form', url: '/main/forms/basic-form' },
      { icon: 'description', title: 'Advanced Form', url: '/main/forms/advanced-form' }
    ]
  },
  { icon: 'star', title: 'Icons', url: '/main/icons' },
  { icon: 'flip_to_front', title: 'Cards', url: '/main/cards' },
  { icon: 'play_circle_outline', title: 'Buttons', url: '/main/buttons' },
  { icon: 'view_module', title: 'Tables', url: '/main/tables' },
  { icon: 'insert_chart_outlined', title: 'Charts', url: '/main/charts' },
  { icon: 'playlist_add_check', title: 'Steppers', url: '/main/steppers' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: Array<SidebarItem>;
  @Output() menuSelect = new EventEmitter<any>();

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS.map(menuItem => menuItem);
    this.getActiveParent();
  }

  getActiveParent() {
    var currentUrl = this.location.prepareExternalUrl(this.location.path());
    if (currentUrl.charAt(0) === '#') {
      currentUrl = currentUrl.slice(1);
    }
   this.menuItems.forEach(mi=>{
     if(mi.subMenu && mi.subMenu.length > 0){
       var activeSubMenu = mi.subMenu.find(sm=>sm.url === currentUrl);
       mi.isActive = activeSubMenu ? true : false;
     }
   });
  }

  menuSelected(){
    this.menuSelect.emit();
  }
}

interface SidebarItem {
  icon?: string,  // Refer to https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/
  title: string,
  url?: string,
  disabled?: boolean,
  isActive?: boolean,
  subMenu?: Array<{ icon?: string, title: string, url: string, disabled?: boolean }>
}
