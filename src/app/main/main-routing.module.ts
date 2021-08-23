import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleserviceService } from '../titleservice.service';
import { AmtCarouselComponent } from './amt-carousel/amt-carousel.component';
// import { AmtCarouselModule } from './amt-carousel/amt-carousel.module';
import { AdvancedButtonsComponent } from './buttons/advanced-buttons/advanced-buttons.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AdvancedCardsComponent } from './cards/advanced-cards/advanced-cards.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExampleComponent } from './example/example.component';
import { AdvancedFormComponent } from './forms/advanced-form/advanced-form.component';
import { BasicFormComponent } from './forms/basic-form/basic-form.component';
import { FormsComponent } from './forms/forms.component';
import { IconsComponent } from './icons/icons.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import { MainComponent } from './main.component';
import { SteppersComponent } from './steppers/steppers.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,canActivateChild:[TitleserviceService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent,data:{title:"Dashboard"} },
      {
        path: 'forms',
        children: [
          { path: '', redirectTo: 'basic-form', pathMatch: 'full' },
          { path: 'basic-forms', component: BasicFormComponent,data:{title:"Basic Forms"} },
          { path: 'advanced-forms', component: AdvancedFormComponent,data:{title:"Advanced Forms"} }
        ]
      },
      { path: 'cards', children : [
        { path: '',redirectTo: 'basic-cards', pathMatch: 'full' },
        { path: 'basic-cards',component: CardsComponent,data:{title:"Basic Cards"}},
        { path: 'advanced-cards',component: AdvancedCardsComponent,data:{title:"Advanced Cards"} },
      ]},
      { path: 'icons', component: IconsComponent,data:{title:"Icons"} },
      { path: 'buttons', component: ButtonsComponent,data:{title:"Buttons"} },
      { path: 'advanced-buttons', component: AdvancedButtonsComponent,data:{title:"Advanced Buttons"} },
      { path: 'tables', component: TablesComponent,data:{title:"Tables"} },
      { path: 'charts', component: ChartsComponent,data:{title:"Charts"} },
      { path: 'steppers', component: SteppersComponent,data:{title:"Steppers"} },
      {path:'iot-dashboard',component:IotDashboardComponent,data:{title:"Iot-Dashboard"}},
      {path:'contacts',component:ContactsComponent,data:{title:"Contacts"}},
      {path:'example',component:ExampleComponent,data:{title:"Example"}},
      {path:'amt-carousel',component:AmtCarouselComponent,data:{title:"AMT Carousel"}}
      // {path:'amt-carousel',loadChildren:()=>AmtCarouselModule}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
