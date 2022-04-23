import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#6405F0','#0724E3', '#05A0F0'], hoverBackgroundColor: ['#08FC3F', '#E3FC3F', '#E34CEE'] },/*
      { data: [ 50, 150, 120 ] },
      { data: [ 250, 130, 70 ] }*/

    ]

  };
  public doughnutChartType: ChartType = 'doughnut';


}
