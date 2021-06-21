import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angula-pruebas';


  cadena = 'Esto es un literal.';
  stringTocapitalize="hola paola";
  stringToTruncate=" Hola paola hoy es viernes y empieza el fin de semana";

   numero = 25895.396;
   personas = [
     {
       id: '1',
       nombre: 'Albert',
       apellidos: 'García Carros'
     },
     {
       id: '2',
       nombre: 'Susana',
       apellidos: 'Montes Gómez'
     },
     {
       id: '3',
       nombre: 'Carmen',
       apellidos: 'Galeote Fernández'
     }
   ];

    // April 15, 1988 -- since month parameter is zero-based
  birthday = new Date(1988, 3, 15);
  toggle = true; // start with true == shortDate

  getformat()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

//Detecting pure changes to primitives and object references
//https://angular.io/guide/pipes#detecting-pure-changes-to-primitives-and-object-references

  newdate = new Date(Date.now());
  getNewDate(){
    return this.newdate;
  }
  addOneDay(){
    this.newdate= new Date(this.newdate.setDate(this.newdate.getDate() + 1));
  }
}
