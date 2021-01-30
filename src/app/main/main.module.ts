import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { BasicFormComponent } from './forms/basic-form/basic-form.component';
import { AdvancedFormComponent } from './forms/advanced-form/advanced-form.component';
import { CardsComponent } from './cards/cards.component';
import { MatNativeDateModule } from '@angular/material/core';
import { IconsComponent } from './icons/icons.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSuccessComponent } from './forms/advanced-form/mat-success/mat-success.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { DoughnutChartComponent } from './charts/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './charts/radar-chart/radar-chart.component';
import { PolarAreaChartComponent } from './charts/polar-area-chart/polar-area-chart.component';
import { BubbleChartComponent } from './charts/bubble-chart/bubble-chart.component';
import { ScatterChartComponent } from './charts/scatter-chart/scatter-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { SteppersComponent } from './steppers/steppers.component';
import { StepperWithErrorComponent } from './steppers/stepper-with-error/stepper-with-error.component';
import { DarkLineChartComponent } from './charts/dark-line-chart/dark-line-chart.component';
import { DarkCardComponent } from './cards/dark-card/dark-card.component';
import { DarkBarChartComponent } from './charts/dark-bar-chart/dark-bar-chart.component';
import { IotDashboardComponent } from './iot-dashboard/iot-dashboard.component';
import {ColorPickerComponent} from './iot-dashboard/color_picker.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [DashboardComponent, MainComponent, FormsComponent, BasicFormComponent, AdvancedFormComponent, CardsComponent, IconsComponent, MatSuccessComponent, ButtonsComponent, TablesComponent,ChartsComponent, LineChartComponent, BarChartComponent, PieChartComponent, DoughnutChartComponent, RadarChartComponent, PolarAreaChartComponent, BubbleChartComponent, ScatterChartComponent, SteppersComponent, StepperWithErrorComponent, DarkLineChartComponent, DarkCardComponent, DarkBarChartComponent, IotDashboardComponent,ColorPickerComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MatNativeDateModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
    ColorPickerModule
  ]
})
export class MainModule { }
