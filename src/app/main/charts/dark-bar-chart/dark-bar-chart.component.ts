import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'amt-dark-bar-chart',
  templateUrl: './dark-bar-chart.component.html',
  styleUrls: ['./dark-bar-chart.component.scss']
})
export class DarkBarChartComponent implements OnInit {
  @Input() dataSet : Array<any>;
  @Input() labels : Array<any>;
  @Input() min : number;
  @Input() max : number;
  @Input() stepSize : number;

  public barChartOptions: ChartOptions;
  public barChartLabels: Label[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[]; 
  
  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      {
         data: this.dataSet, 
         label: 'Series A',
         borderColor: 'rgba(255,255,255,.8)',
        backgroundColor: 'rgba(255,255,255,.8)',
        barPercentage: .4
        }
    ];
    this.barChartLabels = this.labels;

    this.barChartOptions = {
      responsive: true,
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
    }
  }

}
