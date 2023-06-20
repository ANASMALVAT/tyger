import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-gfg-leader-board',
  templateUrl: './gfg-leader-board.component.html',
  styleUrls: ['./gfg-leader-board.component.scss']
})

export class GFGLeaderBoardComponent implements OnInit{

  // canvas: any;
  // ctx: any;

  // @ViewChild('mychart') mychart: any;

  ngOnInit(){

    new Chart("myChart", {
      type: 'line',
      data: {
        datasets: [{
        label: 'Current Vallue',
        data: [0, 20, 40, 50],
        backgroundColor: "rgb(115 185 243 / 65%)",
        borderColor: "#007ee7",
        fill: true,
        },
        {
          label: 'Invested Amount',
          data: [0, 20, 40, 60, 80],
          backgroundColor: "#47a0e8",
          borderColor: "#007ee7",
          fill: true,
        }],
        labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019']
        },
    });
  }
}
    