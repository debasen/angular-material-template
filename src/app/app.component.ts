import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dashboard';

  constructor(private platform: Platform,@Inject(DOCUMENT) private document: Document){
    console.log(this.platform);
    if(!this.platform.ANDROID && !this.platform.IOS){
      this.document.body.classList.add('desktop');
    }
  }
}
