import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../shared/model/estudiante';

@Component({
  selector: 'ed-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  estudiante1: Estudiante;
  estudiante2: Estudiante;
  estudiante3: Estudiante;

  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente');
    this.estudiante1 = {
      id: 1,
      nombre: 'Luisen Poy',
      ciudad: 'Bilbao',
      fotoURL: 'http://mipagina.com/foto.jpg'
    };
    this.estudiante2 = {
      id: 2,
      nombre: 'Ziortza Arrieta',
      ciudad: 'New York'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Enaitz Arrieta',
      ciudad: 'París'
    };

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Patxi Ford',
        ciudad: 'Londres'
      }
    }, 3000);
  }

}
