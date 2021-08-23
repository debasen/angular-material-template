import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleserviceService implements CanActivateChild {

  constructor(private title:Title) { }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let title=route.data?.title;
    this.title.setTitle(title);
    return true;
  }
}
