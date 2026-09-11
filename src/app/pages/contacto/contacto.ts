import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  correo = 'contacto@conectaestudiante.edu';
  telefono = '+56 9 1234 5678';
  direccion = 'Av. Siempre Viva 123, Santiago';
  horario = 'Lunes a Viernes, 09:00 - 18:00';
}

