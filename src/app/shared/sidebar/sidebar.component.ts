import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationService } from '../navigation.service';

export const MENU_ITEMS: Array<SidebarItem> = [
  { icon: 'home', title: 'Dashboard', url: '/main/dashboard' },
  { icon: 'smartphone', title: 'Iot-Dashboard', url: '/main/iot-dashboard' },
  {
    icon: 'collections_bookmark', title: 'Pages', subMenu: [
      { icon: 'account_circle', title: 'Login', url: '/pages/login' },
      { icon: 'chrome_reader_mode', title : 'Register', url: '/pages/register'}
    ]
  },
  {
    icon: 'description', title: 'Forms', url: '/main/forms/basic-forms'
    //  subMenu: [
    //   { icon: 'description', title: 'Basic Form', url: '/main/forms/basic-forms' },
    //   { icon: 'description', title: 'Advanced Form', url: '/main/forms/advanced-forms' }
    // ]
  },
  { icon: 'star', title: 'Icons', url: '/main/icons' },
  { icon: 'flip_to_front', title: 'Cards', url: '/main/cards', subMenu:[
    { title: 'Basic Cards', url: '/main/cards/basic-cards' },
    { title: 'Advanced Cards', url: '/main/cards/advanced-cards' },
  ] },
  { icon: 'play_circle_outline', title: 'Buttons', subMenu:[
    { title: 'Basic Buttons', url: '/main/buttons' },
    { title: 'Advanced Buttons', url: '/main/advanced-buttons' },
  ]
 },
  { icon: 'view_module', title: 'Tables', url: '/main/tables' },
  { icon: 'insert_chart_outlined', title: 'Charts', url: '/main/charts' },
  { icon: 'playlist_add_check', title: 'Steppers', url: '/main/steppers' },
  { icon: 'account_box', title: 'Contacts', url: '/main/contacts' }
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
  // Use 1 or 2 letters instead of icon, if both are missing, letter icon will be created based on title
  abbr?: string,
  title: string,
  url?: string,
  disabled?: boolean,
  isActive?: boolean,
  subMenu?: Array<{ icon?: string,abbr?: string, title: string, url: string, disabled?: boolean }>
}
