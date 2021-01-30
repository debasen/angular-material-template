import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
          { path: 'basic-form', component: BasicFormComponent },
          { path: 'advanced-form', component: AdvancedFormComponent }
        ]
      },
      { path: 'cards', component: CardsComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'steppers', component: SteppersComponent },
      {path:'iot-dashboard',component:IotDashboardComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
