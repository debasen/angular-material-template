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
@Input() color : 'black';

  public lineChartData: ChartDataSets[] = [
  ];
  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
    this.lineChartData = [
      { data: this.dataSet, label: 'Series A', lineTension:0,borderColor: this.color === 'black' ? 'rgba(0,0,0,.8)' : 'rgba(255,255,255,.8)' },
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
                fontColor: this.color === 'black' ? 'black' : "white",
                min: this.min,
                max: this.max,
                stepSize: this.stepSize
            },
            gridLines: {
              color: this.color === 'black' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.2)',
              borderDash: [4, 2],
              zeroLineColor : this.color === 'black' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.2)'
            }
        }],
        xAxes: [{
            ticks: {
                fontColor: this.color === 'black' ? 'black' : "white",
            },
            gridLines: {
              color: this.color === 'black' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.2)',
              borderDash: [4, 2],
              zeroLineColor : this.color === 'black' ? 'rgba(0,0,0,.2)' : 'rgba(255,255,255,.2)'
            }
        }]
    }
    };

    this.lineChartColors = [
      {
        borderColor: this.color === 'black' ? 'rgba(0,0,0,.8)' : 'rgba(255,255,255,.8)',
        backgroundColor: this.color === 'black' ? 'rgba(0,0,255,0)' : 'rgba(255,255,255,0)',
      },
    ];
  }

}
