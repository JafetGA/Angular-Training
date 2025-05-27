---
title: "Visualización de Componentes Angular"
---

# Visualización de Componentes Angular

> **Fecha:** 22 de mayo 2025  

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
- [📚 Estructura de un Componente Angular](#estructura-de-un-componente-angular)
- [📝 Cómo se muestra la información](#como-se-muestra-la-información)
- [📩 Componente envolvente](#componente-envolvente)
- [🛠️ Ejemplos](#ejemplos)
  - [Crear un componente](#componentes-crear-un-componente)
  - [Componente Envolvente (reutilizar un estilo)](#componente-envolvente-reutilizar-un-estilo)

---

## Resumen
Todo en angular es un componente, y cada componente tiene su propio ciclo de vida. En este documento, exploraremos cómo visualizar y comprender mejor los componentes en Angular.

---

## Descripción
### Estructura de un Componente Angular
```powershell
    # Estructura de capreta
    src
    ├── component_name
    │   ├── component_name.component.ts
    │   ├── component_name.component.html
    │   ├── component_name.component.css
    
```
Esta es la estructura básica de un componente en Angular. Cada componente tiene su propio archivo TypeScript, HTML y CSS. El archivo TypeScript contiene la lógica del componente, el archivo HTML contiene la plantilla del componente y el archivo CSS contiene los estilos del componente.

### Como se muestra la información
index.html
```html
    <app-root></app-root>
```

Como se puede ver, el componente raíz es `app-root`, que se encuentra en `app.component.ts`. Este componente es el punto de entrada de la aplicación Angular.
Pero lo que se ve en el html no es lo que se carga en primera instancia, lo que realmente se esta cargando es el `main.ts`, que es el punto de entrada de la aplicación.
main.ts
```typescript
    import { bootstrapApplication } from '@angular/platform-browser';
    import { AppComponent } from './app/app.component';
    
    bootstrapApplication(AppComponent);
```
Él `main.ts` es el punto de entrada de la aplicación, y es donde se inicializa la aplicación Angular. En este caso, se está utilizando `bootstrapApplication` para iniciar la aplicación con el componente `AppComponent`.
Como sabemos que el componente `AppComponent` es el que se va a cargar, podemos ver su contenido en `app.component.ts`.

app.component.ts
```typescript
    import { Component } from '@angular/core';
    
    @Component({
        selector: 'app-root',
        standalone: true,
        imports: [],
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
    })
    export class AppComponent {}

```
En este archivo, se define el componente `AppComponent`, que es el componente raíz de la aplicación. El decorador `@Component` se utiliza para definir el selector, las plantillas y los estilos del componente.
Dentro de este podemos ver el llamado a la plantilla `app.component.html`, que es donde se define la estructura HTML del componente así como el llamado a sus estilos `app.component.css`.

app.component.html
```html
<header>
    <img src="assets/angular-logo.png" alt="The Angular logo: The letter 'A'" />
    <h1>Let's get started!</h1>
    <p>Time to learn all about Angular!</p>
</header>

```
Desde el archivo `app.component.html` podemos ver que se carga una imagen y un texto.
Que es justamente lo que visualizamos en el navegador.

### Componente envolvente

En Angular podemos hacer que los componentes envuelvan a otros componentes. Esto es útil para crear componentes reutilizables y para organizar mejor el código.
```html
<div>
  <ng-content/>
</div>
```
Esta es la estructura básica de un componente envolvente. El `<ng-content/>` es un marcador de posición que se reemplaza con el contenido del componente hijo.

---

## Ejemplos

### Componentes: Crear un componente

Al crear muchos componentes, es importante tener una buena estructura de carpetas para mantener el código organizado. A continuación, se muestra un ejemplo de cómo crear un componente en Angular.

```bash
  ng generate component nombre-componente

```
or 
```bash
  ng g c nombre-componente
```
### Componente Envolvente (reutilizar un estilo)

Definimos un componente envolvente que se encargará de envolver otros componentes y aplicar un estilo común a todos ellos.

```css
div {
  border-radius: 6px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
```
```html
<div>
  <ng-content/>
</div>
```

Esto nos permite reutilizar el estilo en diferentes componentes sin tener que repetir el código CSS. Simplemente envolvemos los componentes que queremos estilizar con este componente envolvente.

```html
<app-card>
  <article>
    <h2>{{ task.title }}</h2>
    <time>{{ task.dueDate | date:'fullDate'}}</time>
    <p>{{ task.summary }}</p>
    <p class="actions">
      <button (click)="onCompleteTask()">Complete</button>
    </p>
  </article>
</app-card>
```

`app-card` es el componente envolvente que hemos creado. Dentro de él, podemos colocar cualquier contenido que queramos estilizar con el estilo definido en el componente envolvente.

---
[🔍 TOP](#índice-de-contenidos)