import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
   /* this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        const labels = Object.keys(data);
        const values = Object.values(data);
        this.doughnutChartData={
          labels:labels,
          datasets: [{ data : values }]
        }
      }
    )*/
    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({labels, values}) =>{
        this.doughnutChartData={
          labels:labels,
          datasets: [{ data : values }]
        }

      })

  }

  public doughnutChartLabels: string[] = [/* 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' */];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
    /*  { data: [ 350, 450, 100 ], backgroundColor: ['#6405F0','#0724E3', '#05A0F0'], hoverBackgroundColor: ['#08FC3F', '#E3FC3F', '#E34CEE'] },
      */
    ]

  };
  public doughnutChartType: ChartType = 'doughnut';

}
