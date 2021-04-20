import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
    path: '', component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'forms',
        children: [
          { path: '', redirectTo: 'basic-form', pathMatch: 'full' },
          { path: 'basic-forms', component: BasicFormComponent },
          { path: 'advanced-forms', component: AdvancedFormComponent }
        ]
      },
      { path: 'cards', children : [
        { path: '',redirectTo: 'basic-cards', pathMatch: 'full' },
        { path: 'basic-cards',component: CardsComponent },
        { path: 'advanced-cards',component: AdvancedCardsComponent },
      ]},
      { path: 'icons', component: IconsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'advanced-buttons', component: AdvancedButtonsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'steppers', component: SteppersComponent },
      {path:'iot-dashboard',component:IotDashboardComponent},
      {path:'contacts',component:ContactsComponent},
      {path:'example',component:ExampleComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
