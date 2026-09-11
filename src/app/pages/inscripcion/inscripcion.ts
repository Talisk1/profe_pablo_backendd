import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-inscripcion',
  styleUrl: './inscripcion.css',
  templateUrl: './inscripcion.html',
})
export class Inscripcion {
  formularioInscripcion = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    carrera: new FormControl('', [Validators.required]),
    actividad: new FormControl('', [Validators.required]),
    jornada: new FormControl('', [Validators.required]),
    comentario: new FormControl(''),
  });

  enviarInscripcion() {
    if (this.formularioInscripcion.valid) {
      console.log('Inscripcion registrada:', this.formularioInscripcion.value);
      alert('Inscripcion registrada correctamente');
      this.formularioInscripcion.reset();
    } else {
      alert('Debe completar correctamente los campos obligatorios');
      this.formularioInscripcion.markAllAsTouched();
    }
  }
}
