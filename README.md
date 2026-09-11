# ConectaEsctudiante

Portal "Conecta Estudiante" - SPA en Angular para informar a los estudiantes
sobre actividades y talleres disponibles durante el semestre.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.7.

## Versión de Angular
Angular 22.1.7 (Angular CLI 22.1.8)

## Instalación y ejecución
1. Clonar el repositorio
2. Instalar dependencias: `npm install`
3. Ejecutar en modo desarrollo: `ng serve`
4. Abrir en el navegador: http://localhost:4200/

## Vistas y componentes principales
- **Cabecera** (`components/cabecera`): título e identidad visual del portal, visible en todas las vistas.
- **Menú** (`components/menu`): navegación entre las vistas usando routerLink y routerLinkActive.
- **Inicio** (`pages/inicio`): mensaje de bienvenida y presentación del portal.
- **Actividades** (`pages/actividades`): listado de 4 talleres (nombre, descripción y horario) mediante interpolación.
- **Contacto** (`pages/contacto`): datos de contacto y horario de atención.
- **Inscripción** (`pages/inscripcion`): formulario reactivo para solicitar participación en una actividad.

## Rutas implementadas
| Ruta            | Componente    |
|------------------|--------------|
| `/`              | Inicio       |
| `/actividades`   | Actividades  |
| `/contacto`      | Contacto     |
| `/inscripcion`   | Inscripcion  |
| `**` (no encontrada) | redirige a `/` |

Configuradas en `app.routes.ts` mediante `provideRouter(routes)`, usando `RouterOutlet`, `RouterLink` y `RouterLinkActive`.

## Formulario de inscripción y validaciones
Implementado con ReactiveFormsModule, FormGroup y FormControl.

| Campo      | Validación                          |
|------------|--------------------------------------|
| Nombre     | Obligatorio, mínimo 3 caracteres     |
| Apellido   | Obligatorio, mínimo 3 caracteres     |
| Correo     | Obligatorio, formato de email válido |
| Carrera    | Obligatorio                          |
| Actividad  | Obligatorio (selección, 4 opciones)  |
| Jornada    | Obligatorio (selección)              |
| Comentario | Opcional                             |

Al enviar un formulario válido se registra la información en consola, se muestra una confirmación y se reinicia el formulario. Si es inválido, se marcan los campos y se muestran mensajes de error.

## Avance del proyecto

### Etapa 1 - Estructura inicial
Se crearon los componentes standalone `Cabecera` y `Menu`, y las paginas
`Inicio`, `Actividades`, `Contacto` e `Inscripcion` como base de la
aplicacion (estructura de carpetas `components/` y `pages/`).

### Etapa 2 - Navegacion
Se configuraron las rutas de la aplicacion (`app.routes.ts`) usando
`provideRouter`. El menu utiliza `routerLink` y `routerLinkActive`
para resaltar la vista activa, y el contenido central se renderiza
con `router-outlet` dentro de `app.html`, manteniendo la cabecera y
el menu siempre visibles.

### Etapa 3 - Formulario y validaciones
Se implementó el formulario reactivo de inscripción (`Inscripcion`) con `FormGroup`, `FormControl` y `Validators` para los 7 campos solicitados. Se agregaron mensajes de error visibles por campo y lógica de envío (console.log, confirmación y reset del formulario).

### Etapa 4 - Integración y versión final
Se aplicaron estilos CSS propios a cabecera, menú, vistas y formulario. Se verificó la navegación entre rutas, se ejecutó `ng build` sin errores y se realizó la revisión final antes de la entrega.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
