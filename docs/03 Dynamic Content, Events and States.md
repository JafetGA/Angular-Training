# Contenido Dinámico, Eventos y Estados

> **Fecha:** 22 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
- [🔧 Enlace de Datos (Data Binding)](#enlace-de-datos-data-binding)
  - [🔧 String Interpolation](#string-interpolation)
  - [🔧 Property Binding](#property-binding)
- [🧠 Valores Computados (Computed Values)](#valores-computados-computed-values)
  - [🔧 Computed Values](#computed-values)
  - [🔧 Events with Event Binding](#events-with-event-binding)
- [🔧 Manejo de Eventos (Event Handling)](#manejo-de-eventos-event-handling)
  - [🔧 States](#states)
- [🧩 Control de Flujo en Plantillas (Template Control Flow)](#control-de-flujo-en-plantillas-template-control-flow)
  - [@for en HTML](#for-en-html)
  - [@if en HTML](#if-en-html)
- [🧩 Control de Flujo en Plantillas (Legacy) ](#control-de-flujo-en-plantillas-legacy)
  - [ngfor en HTML](#ngfor-en-html)
  - [ngIf en HTML](#ngif-en-html)
- [🛠️ Ejemplos](#ejemplos)
    - [Crear un componente](#componentes-crear-un-componente)

---

## Resumen
En esta sección veremos como Angular utiliza datos dinámicos desde los componentes para mostrar información en la vista.

---

## Descripción

Para poder mostrar datos dinámicos en Angular, es necesario crear un componente que contenga la lógica y los datos que se desean mostrar. 

Además, es necesario obtener datos de un lugar externo, como una API o un servicio, para poder mostrarlos en la vista.

Para este ejemplo, creamos un archivo `dummy-users.ts` que contiene una lista de usuarios ficticios.

```typescript
export const DUMMY_USERS = [
    {
        id: 'u1',
        name: 'Jasmine Washington',
        avatar: 'user-1.jpg',
    },
    {
        id: 'u2',
        name: 'Emily Thompson',
        avatar: 'user-2.jpg',
    },
    {
        id: 'u3',
        name: 'Marcus Johnson',
        avatar: 'user-3.jpg',
    },
    {
        id: 'u4',
        name: 'David Miller',
        avatar: 'user-4.jpg',
    },
    {
        id: 'u5',
        name: 'Priya Patel',
        avatar: 'user-5.jpg',
    },
    {
        id: 'u6',
        name: 'Arjun Singh',
        avatar: 'user-6.jpg',
    },
];
```
### Enlace de Datos (Data Binding)
#### String Interpolation
Utilizamos doble llave `{{ }}` para mostrar propiedades de un elemento dynamic en nuestro Typescript. Esto es una forma de interpolación de datos en Angular.
Los componentes cuentan con su propio TypeScript, HTML y CSS. En este caso, el componente `user` tiene su propio archivo `user.component.ts`, `user.component.html` y `user.component.css`.

Ya hemos visto como se crea un componente y como se asocian estos archivos. En este caso, el componente `user` se encarga de mostrar la información de un usuario en particular.

```typescript
    export class UserComponent {
        selectedUser = DUMMY_USERS[randomIndex];
    }
```

La variable `selectedUser` contiene un objeto que representa a un usuario. Este objeto se obtiene de la lista de usuarios ficticios `DUMMY_USERS`.

Una propiedad de Angular con sus componentes es que se pueden utilizar variables directamente en el HTML. En este caso, se utiliza la propiedad `selectedUser` para mostrar la información del usuario en el HTML.

```html
<div>
    <button>
        <span>{{ selectedUser.name }}</span>
    </button>
</div>
```
#### Property Binding
Si queremos utilizarlo por ejemplo en atributos de etiquetas como `img` con sus atributos `src` o `alt`, debemos de agregar `[ ]` para indicar que es una propiedad de Angular.
Y esto pasa porque Angular no puede saber si el valor que le estamos pasando es un string o una variable, por lo que al agregar los corchetes Angular sabe que es una propiedad de Angular y no un string.

Esto se le conoce como **Property Binding**.

> Básicamente, el Property Binding es una forma de enlazar propiedades de un componente a propiedades de un elemento HTML. Esto permite que los cambios en el componente se reflejen automáticamente en la vista y viceversa.

```html
<div>
    <button>
        <img [src]="'assets/users/' + selectedUser.avatar" [alt]="selectedUser.name" />
        <span>{{ selectedUser.name }}</span>
    </button>
</div>
```
### Valores Computados (Computed Values)
#### Computed Values
Tanto el String Interpolation como el Property Binding pueden recibir valores computados. Esto significa que podemos utilizar expresiones dentro de las llaves o corchetes para calcular un valor en tiempo real.

En este caso lo que vamos a hacer es mantener simple el código ya que es uno de los principios de Angular. Por lo que vamos a crear una atributo que nos permita acceder al url de la imagen
```typescript
export class UserComponent {
    selectedUser = DUMMY_USERS[randomIndex];

    get imagePath(){
        return `assets/users/${this.selectedUser.avatar}`;
    }
}
```

De esta forma podemos acceder a la propiedad `imagePath` desde el HTML y no tener que concatenar el string en el HTML.

```html
    <img [src]="imagePath" [alt]="selectedUser.name" />
```

### Events with Event Binding
Ahora vamos a ver como podemos utilizar eventos en Angular. Para esto vamos a utilizar el evento `click` de un botón.

La definición de un evento en Angular es por medio de `(nombre del evento) = "nombre del método"` esto es así porque Angular no puede saber si el valor que le estamos pasando es un string o una variable, por lo que al agregar los paréntesis Angular sabe que es un evento y no un string.

AHora podemos utilizar cualquier método que tengamos en el componente para ejecutar una acción cuando se dispare el evento.

```html
    <button (click)="onSelectUser()">
        ...
    </button>
```
Invoca a
```typescript
  onSelectUser(){
    console.log("clicked");
  }
```
Normalmente, la convención para detectar que una parte del código es un evento es utilizar el prefijo `on` seguido del nombre del evento.
### Manejo de Eventos (Event Handling)
#### States
Manejar estados en Angular es tan simple como cambiar el valor de una variable en el componente y Angular se encarga de actualizar la vista automáticamente.

Si tomamos el ejemplo anterior y agregamos un estado para el botón, podemos ver como Angular se encarga de actualizar la vista automáticamente.
Cambiando el usuario en cada clic

```typescript
  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
```
Hacemos override a la propiedad randomIndex y le asignamos un nuevo valor cada vez que se hace clic en el botón. Esto hace que Angular actualice la vista automáticamente y muestre un nuevo usuario cada vez que se hace clic en el botón.

### Control de Flujo en Plantillas (Template Control Flow)
#### @for en HTML
Imaginemos que tenemos una lista de usuarios y queremos mostrarla en la vista. Para esto creamos un componente que recibe la información del usuario, tiene su template para mostrar la información.
Podemos utilizar nuestro componente cuantas veces sea necesario para mostrar a los usuarios
```html
<ul>
  <li>
    <app-user [user]="user[0]"></app-user>
  </li>
  <li>
    <app-user [user]="user[1]"></app-user>
  </li>
  <li>
    <app-user [user]="user[2]"></app-user>
  </li>
  <li>
    <app-user [user]="user[3]"></app-user>
  </li>
</ul>
```
Esto puede resultar en un problema si tenemos una lista de usuarios muy grande, ya que tendríamos que crear un componente por cada usuario. Para esto Angular nos permite utilizar el `@for` para iterar sobre una lista de elementos y crear un componente por cada elemento de la lista.

```html
<ul id="users">
  @for (user of users; track user.id) {
    <li>
      <app-user [user]="user" (select)="onSelectUser($event)"/>
    </li>
  }
</ul>
```
- El `@for` nos permite iterar sobre una lista de elementos y crear un componente por cada elemento de la lista. En este caso, estamos iterando sobre la lista de usuarios y creando un componente `app-user` por cada usuario.
- El `track` nos permite identificar cada elemento de la lista y Angular se encarga de actualizar la vista automáticamente.

#### @if en HTML
Podemos utilizar el `@if` para mostrar u ocultar un elemento en la vista dependiendo de una condición. Al igual como pasa en javascript y typescript, podemos utilizar el `@if` como un condicional para mostrar u ocultar un elemento en la vista.

```html
  @if (userSelected) {
    <app-tasks [name]="userSelected.name"/>
  } @else {
    <p id="fallback">Select a user to see their task!</p>
  }
```
- El `@if` nos permite mostrar u ocultar un elemento en la vista dependiendo de una condición. En este caso, estamos mostrando el componente `app-tasks` si el usuario está seleccionado y si no, mostramos un mensaje de error.
- El `@else` nos permite mostrar un elemento en la vista si la condición del `@if` no se cumple. En este caso, estamos mostrando un mensaje de error si el usuario no está seleccionado.

### Control de Flujo en Plantillas (Legacy)

#### ngfor en HTML

Para iterar sobre una lista de elementos y crear un componente por cada elemento de la lista, podemos utilizar el `ngFor` para iterar sobre una lista de elementos y crear un componente por cada elemento de la lista.

Pero a diferencia del `@for`, el `ngFor` este debe de ser importado desde el `CommonModule` y no se puede utilizar el `track` para identificar cada elemento de la lista. Por lo que Angular no se encarga de actualizar la vista automáticamente.

```typescript
import { Ngfor } from '@angular/common';
```

```html
<li *ngFor="let user of users">
  <app-user [user]="user" (select)="onSelectUser($event)"/>
</li>
```
Tenemos que agregar el `*` para indicar que es un `ngFor` y no un `@for`. Esto es porque Angular no puede saber si el valor que le estamos pasando es un string o una variable, por lo que al agregar el asterisco Angular sabe que es un `ngFor` y no un string.
Además, debemos de agregar el `let` para indicar que estamos creando una variable local que va a contener el valor de cada elemento de la lista. En este caso, estamos creando una variable local `user` que va a contener el valor de cada elemento de la lista.

#### ngIf en HTML
Para mostrar u ocultar un elemento en la vista dependiendo de una condición, podemos utilizar el `ngIf` para mostrar u ocultar un elemento en la vista dependiendo de una condición. Al igual como pasa en javascript y typescript, podemos utilizar el `ngIf` como un condicional para mostrar u ocultar un elemento en la vista.

```html
<app-tasks *ngIf="userSelected" [name]="userSelected.name"/>
```
Esto por si solo ya nos permite mostrar u ocultar un elemento en la vista dependiendo de una condición. En este caso, estamos mostrando el componente `app-tasks` si el usuario está seleccionado y si no, no se muestra nada.

Pero si queremos agregar un else la sintaxis es un poco diferente. En este caso, tenemos que agregar el `ng-template` para indicar que es un `ngIf` y no un `@if`. Esto es porque Angular no puede saber si el valor que le estamos pasando es un string o una variable, por lo que al agregar el `ng-template` Angular sabe que es un `ngIf` y no un string.

```html
<app-tasks *ngIf="userSelected; else fallback " [name]="userSelected.name"/>
<ng-template #fallback>
  <p id="fallback">Select a user to see their task!</p>
</ng-template>
```
De esta forma podemos agregar un `else` al `ngIf` y mostrar un elemento en la vista si la condición del `ngIf` no se cumple. En este caso, estamos mostrando un mensaje de error si el usuario no está seleccionado.


---

## Ejemplos

### Componentes: Crear un componente


```bash


```


---
[🔍 TOP](#índice-de-contenidos)