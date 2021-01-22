import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit, AfterViewInit{
  icons: Array<any>;
  filteredIcons : Array<any>;
  iconCacheSize : number = 10;
  searchText : string;
  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Array<any>>('assets/json/icons.json').subscribe(response=>{
      this.icons = response;
      this.filteredIcons = response;
    });
    this.iconCacheSize = 10;  // Initially loading 10 icons for performance
  }
  
  ngAfterViewInit(){
    setTimeout(() => {
      this.iconCacheSize = 900;
    }, 10);
    
  }

  iconCopied(){
    this.snackBar.open("Copied to Clipboard", "Dismiss", {
      duration: 2000,
    });
  }

  search(){
    if(!this.searchText || this.searchText === ''){
      this.filteredIcons = this.icons.map(i=>i);
    }else{
      this.filteredIcons = JSON.parse(JSON.stringify(this.icons));  // Deep Copy All Icons
      this.filteredIcons = this.filteredIcons.filter(iconOb => iconOb.icons = iconOb.icons.filter(i=>i.includes(this.searchText)));
    }
  }

  clearSearch(){
    this.searchText = '';
    this.search();
  }
}