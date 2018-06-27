import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {
  type = 'pie';
  data = {
    labels: [ "Usuarios Activos", "Usuarios Banneados"], 
    datasets: [
      {
        label: "Cantidad",
        data: [65,3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)'
        ]
      }
    ]
  };
  options = {
    responsive: true,
    maintainAspectRatio: false
  };
  constructor() { }

  ngOnInit() {
  }

}
