---
title: "Visualización de Componentes Angular"
---

# Visualización de Componentes Angular

> **Fecha:** 22 de mayo 2025  

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
- [🛠️ Ejemplos](#ejemplos)
  - [Crear un componente](#componentes-crear-un-componente)

---

## Resumen
Todo en angular es un componente, y cada componente tiene su propio ciclo de vida. En este documento, exploraremos cómo visualizar y comprender mejor los componentes en Angular.

---

## Descripción

```powershell
    # Estructura de capreta
    src
    ├── app
    │   ├── app.component.ts
    │   ├── app.component.html
    │   ├── app.component.css
    │
    ├── index.html
    ├── main.ts
    ├── style.css
```

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


---

## Ejemplos

### Componentes: Crear un componente

Explicación de qué hace este ejemplo y cuándo usarlo.

```bash
  Resultado o comportamiento esperado
```

---
[🔍 TOP](#índice-de-contenidos)