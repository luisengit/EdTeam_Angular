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

  listaEstudiantes: Estudiante[];
  
  constructor() { }

  ngOnInit() {
    console.log('Inicializando el componente');
    this.estudiante1 = {
      id: 1,
      nombre: 'Luisen Poy',
      ciudad: 'Bilbao',
      // fotoURL: 'https://memeguy.com/photos/images/just-some-random-profile-photo-on-okcupid-136668.png'
    };
    this.estudiante2 = {
      id: 2,
      nombre: 'Ziortza Arrieta',
      ciudad: 'New York',
      fotoURL: 'https://www2.ucar.edu/sites/default/files/staffnotes/2008/jaclyn.jpg'
    };
    this.estudiante3 = {
      id: 3,
      nombre: 'Enaitz Arrieta',
      ciudad: 'París',
      fotoURL: 'https://orig00.deviantart.net/76cb/f/2012/059/c/9/profile_picture_by_random_akatsuki_dude-d4rbims.jpg'
    };

    this.listaEstudiantes = [
      this.estudiante1, 
      this.estudiante2, 
      this.estudiante3
    ];

    setTimeout(() => {
      this.estudiante3 = {
        id: 4,
        nombre: 'Patxi Ford',
        ciudad: 'Londres'
      }
    }, 3000);
  }

  onMouseClick($event: Estudiante) {
    console.log('Click on: ', $event.nombre);
  }

}
