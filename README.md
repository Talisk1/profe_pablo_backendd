# ConectaEsctudiante

Portal "Conecta Estudiante" - SPA en Angular para informar a los estudiantes
sobre actividades y talleres disponibles durante el semestre.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.7.

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
