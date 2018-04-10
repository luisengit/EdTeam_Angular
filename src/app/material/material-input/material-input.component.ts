import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {
  usuario = {
    nombre: 'Luis'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.usuario.nombre = 'Pakito';
    }, 2000)
  }

  onKeyUp($event) {
    console.log('keyUp, ', $event);
  }

  onBlur($event: FocusEvent) {
    console.log('onBlur, ', $event);
  }

  

}
