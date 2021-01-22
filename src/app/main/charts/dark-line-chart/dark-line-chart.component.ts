import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color, BaseChartDirective, } from 'ng2-charts';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dark-line-chart',
  templateUrl: './dark-line-chart.component.html',
  styleUrls: ['./dark-line-chart.component.scss']
})
export class DarkLineChartComponent implements OnInit {
@Input() dataSet : Array<any>;
@Input() labels : Array<any>;
@Input() min : number = 0;
@Input() max : number;
@Input() stepSize : number;

  public lineChartData: ChartDataSets[] = [
  ];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.lineChartData = [
      { data: this.dataSet, label: 'Series A', lineTension:0,borderColor: 'rgba(255,255,255,.8)' },
    ];
    this.lineChartLabels = this.labels;

    this.lineChartOptions = {
      responsive: true,
      // aspectRatio: 3,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      scales : {
        yAxes: [{
            ticks: {
                fontColor: "white",
                min: this.min,
                max: this.max,
                stepSize: this.stepSize
            },
            gridLines: {
              color: 'rgba(255,255,255,.2)',
              borderDash: [4, 2],
              zeroLineColor : 'rgba(255,255,255,.2)'
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: "white",
            },
            gridLines: {
              color: 'rgba(255,255,255,.2)',
              borderDash: [4, 2],
              zeroLineColor : 'rgba(255,255,255,.2)'
            }
        }]
    }
    };

    this.lineChartColors = [
      {
        borderColor: 'rgba(255,255,255,.8)',
        backgroundColor: 'rgba(255,255,0,0)',
      },
    ];
  }

}
