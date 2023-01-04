import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  datos = [
    ['jimmy','cruz','16']
  ];
  nombre!:string[];
  apellido!:string[];
  edad!:number;
  estado!:string;

  enviarDatos(nombre:string, apellido:string, edad:string){
    this.datos.push(
      [
        String(nombre), 
        String(apellido), 
        String(edad)
      ]
    );

    if (Number(this.edad)  > 18) {
      this.estado = "Mayor de edad";
    } else{
      this.estado = "Menor de edad";
    }
  }

}
