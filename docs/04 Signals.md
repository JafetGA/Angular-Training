# Visualización de Componentes Angular

> **Fecha:** 22 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [🔧 Uso de Signal](#utilizando-signal)
---

## Resumen
El concepto de **Signal** en Angular es una forma de manejar la comunicación entre componentes y servicios. Permite crear aplicaciones más reactivas y eficientes al facilitar la gestión de eventos y datos.

Se pueden entender como contenedores de datos que permiten a los componentes reaccionar a cambios en valores.

Por lo que ahora todo lo que sea una Signal debe de ejecutarse como una función, por el hecho de que se ejecuta una función cada vez que se cambia el valor de la Signal.

---

## Descripción
### Utilizando Signal

```typescript
import { signal } from '@angular/core';
```
Signal proviene de `@angular/core`, por lo que es necesario importarlo.

Como vimos una signal está lista para verificar cambios en su valor, por lo que se puede utilizar de la siguiente manera:

```typescript
export class UserComponent {
    selectedUser = signal(DUMMY_USERS[randomIndex]);
}
```
La signal en este caso está asignada a `selectedUser`, esperando por cambios en su valor, en este caso un usuario random.

Ahora para acceder a los valores de nuestro Objeto que es una Signal debemos de utilizar `()` como si se tratara de una función.
Esto es así porque cada vez que se cambia el valor de la Signal, se ejecuta una función que actualiza el valor.

```html
<div>
    <button (click)="onSelectUser()">
        <span>{{ selectedUser().name }}</span>
    </button>
</div>

```
Y ahora para cambiar el valor de la Signal, se puede hacer de la siguiente manera:

```typescript
export class UserComponent {
    selectedUser = signal(DUMMY_USERS[randomIndex]);

    onSelectUser(){
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
```
Utilizando el método `set` de la Signal, se puede cambiar el valor de la misma.

Para Computed Values tenemos que utilizar el método `computed` de la Signal, para poder acceder a los valores de la Signal.
Esto nos permite crear valores computados a partir de otras Signals.

```typescript
export class UserComponent {
    selectedUser = signal(DUMMY_USERS[randomIndex]);
    imagePath = computed(() =>
        `assets/users/${this.selectedUser().avatar}`
    )

    onSelectUser(){
        const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
        this.selectedUser.set(DUMMY_USERS[randomIndex]);
    }
}
```
Computed es un método que se utiliza para crear valores computados a partir de otras Signals. Esto significa que cada vez que se cambia el valor de la Signal, se ejecuta una función que actualiza el valor de la Signal.
Podemos verlo como un atributo más que es en si una Signal, pero que se actualiza cada vez que cambia el valor de la Signal.
Por lo que para llamarlo debemos de ejecutarlo como una función.
```html
<div>
    <button (click)="onSelectUser()">
        <img [src]="imagePath()" [alt]="selectedUser().name" />
        <span>{{ selectedUser().name }}</span>
    </button>
</div>

```

---



---
[🔍 TOP](#índice-de-contenidos)