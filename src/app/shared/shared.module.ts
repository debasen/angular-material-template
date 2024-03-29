import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HamburgerIconComponent } from './hamburger-icon/hamburger-icon.component';
import { FooterComponent } from './footer/footer.component';
import { LetterIconComponent } from './letter-icon/letter-icon.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, HamburgerIconComponent, FooterComponent, LetterIconComponent,AudioPlayerComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    DragDropModule,
    PerfectScrollbarModule
  ], exports: [
    AngularMaterialModule,
    SidebarComponent,
    NavbarComponent,
    HamburgerIconComponent,
    FooterComponent,
    LetterIconComponent,
    AudioPlayerComponent

  ]
})
export class SharedModule { }
