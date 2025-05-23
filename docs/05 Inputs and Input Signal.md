# Inputs y Input Signals en Angular

> **Fecha:** 22 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [🔧 Input Decorador](#input-decorador)
  - [🔧 Input Signals](#input-signals)
  - [📊 Comparativa](#comparativa)
- [🛠️ Opciones de Configuración](#opciones-de-configuración)
- [⚡ Ejemplos Prácticos](#ejemplos-prácticos)
- [🌟 Mejores Prácticas](#mejores-prácticas)
---

## Resumen
Los **Inputs** son uno de los mecanismos fundamentales de comunicación en Angular, permitiendo que los datos fluyan desde un componente padre hacia un componente hijo. Angular ofrece dos formas para implementar inputs: el tradicional decorador `@Input()` y la nueva función `input()` basada en Signals, introducida para mejorar la reactividad y el rendimiento.

---

## Descripción

### Input Decorador

El enfoque tradicional utiliza el decorador `@Input()` para marcar una propiedad de clase como entrada:

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <img [src]="'assets/users/' + avatar" [alt]="name">
      <span>{{ name }}</span>
    </div>
  `
})
export class UserComponent {
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
```

Con este enfoque:
- Accedemos directamente a la propiedad en la clase: `this.avatar`
- En la plantilla, usamos la propiedad sin paréntesis: `{{ name }}`
- El sistema de detección de cambios de Angular (Zone.js) se encarga de actualizar el componente

### Input Signals

El nuevo enfoque con Signals utiliza la función `input()`:

```typescript
import { Component, input, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <div>
      <img [src]="imagePath()" [alt]="name()">
      <span>{{ name() }}</span>
    </div>
  `
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();
  
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });
}
```

Con Input Signals:
- Accedemos al valor como una función: `this.avatar()`
- En la plantilla, utilizamos paréntesis: `{{ name() }}`
- La reactividad es más granular y eficiente, basada en el sistema de Signals
- Podemos crear fácilmente valores derivados usando `computed()`

### Comparativa

| Característica | Input Decorador | Input Signal |
|----------------|----------------|--------------|
| Sintaxis | `@Input() propiedad` | `propiedad = input<Tipo>()` |
| Acceso al valor | Directo: `this.propiedad` | Función: `this.propiedad()` |
| En plantillas | `{{ propiedad }}` | `{{ propiedad() }}` |
| Reactividad | Basada en Zone.js | Basada en Signals (más eficiente) |
| Valores derivados | Getters o propiedades adicionales | Usando `computed()` |
| Requerido | `@Input({required: true})` | `input.required<Tipo>()` |
| Tipado | Explícito | Inferido o explícito |

---

## Opciones de Configuración

Los Input Signals ofrecen diversas opciones de configuración:

### Inputs requeridos

```typescript
// Con decorador
@Input({required: true}) avatar!: string;

// Con Signal
avatar = input.required<string>();
```

### Valores predeterminados

```typescript
// Con decorador
@Input() count: number = 0;

// Con Signal
count = input<number>(0);
```

### Transformaciones (solo con Input Signals)

```typescript
// Convertir automáticamente strings a números
userId = input<number, string>(0, {
  transform: (value: string) => parseInt(value, 10)
});
```

### Alias para inputs (manera alternativa)

```typescript
// Con decorador
@Input('usuarioNombre') name!: string;

// O usando metadatos
@Component({
  // ...
  inputs: ['avatar:userAvatar']
})
```

---

## Ejemplos Prácticos

### Componente Padre (app.component.ts)

```typescript
import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import { DUMMY_USERS} from "./dummy-users";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
}
```

### Plantilla del Padre (app.component.html)

```html
<app-header/>
<main>
  <ul id="users">
    <li>
      <app-user [avatar]="users[0].avatar" [name]="users[0].name"/>
    </li>
    <li>
      <app-user [avatar]="users[1].avatar" [name]="users[1].name"/>
    </li>
    <!-- Más usuarios... -->
  </ul>
</main>
```

### Componente Hijo con Input Signals (user.component.ts)

```typescript
import {Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  onSelectUser(){ /* código para seleccionar usuario */ }
}
```

### Plantilla del Hijo (user.component.html)

```html
<div>
  <button (click)="onSelectUser()">
    <img [src]="imagePath()" [alt]="name()" />
    <span>{{ name() }}</span>
  </button>
</div>
```

---

## Mejores Prácticas

1. **Consistencia en el estilo**:
   - No mezcles `@Input()` y `input()` en el mismo componente
   - Mantén un enfoque coherente en todo el proyecto

2. **Usa `input.required<Type>()`** para entradas obligatorias:
   - Mejora la seguridad de tipos y genera errores claros si falta un binding

3. **Aprovecha `computed()`** con Input Signals:
   - Crea valores derivados que se actualizan automáticamente cuando cambian los inputs

4. **Considera la migración gradual**:
   - Para proyectos existentes, considera migrar componentes a Input Signals gradualmente
   - Los nuevos componentes pueden usar Input Signals directamente

5. **Recuerda los paréntesis**:
   - Al usar Input Signals, siempre accede al valor con paréntesis: `this.inputName()` y `{{ inputName() }}`

---

[🔍 TOP](#índice-de-contenidos)
