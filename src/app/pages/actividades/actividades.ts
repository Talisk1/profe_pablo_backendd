import { Component } from '@angular/core';

interface Actividad {
  nombre: string;
  descripcion: string;
  horario: string;
}

@Component({
  imports: [],
  selector: 'app-actividades',
  styleUrl: './actividades.css',
  templateUrl: './actividades.html',
})
export class Actividades {
  actividades: Actividad[] = [
    {
      nombre: 'Taller de Robotica',
      descripcion: 'Introduccion al armado y programacion de robots basicos.',
      horario: 'Lunes y Miercoles, 15:00 - 17:00',
    },
    {
      nombre: 'Club de Lectura',
      descripcion: 'Espacio de discusion sobre literatura contemporanea.',
      horario: 'Martes, 10:00 - 11:30',
    },
    {
      nombre: 'Taller de Emprendimiento',
      descripcion: 'Herramientas basicas para crear un plan de negocio.',
      horario: 'Jueves, 16:00 - 18:00',
    },
    {
      nombre: 'Yoga y Bienestar',
      descripcion: 'Sesiones de relajacion y manejo del estres academico.',
      horario: 'Viernes, 08:00 - 09:00',
    },
  ];
}
