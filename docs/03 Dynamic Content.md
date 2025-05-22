# Visualización de Componentes Angular

> **Fecha:** 22 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [🔧 Property Binding](#property-binding)
  - [🔧 Property Binding](#property-binding)
  - [🔧 Computed Values](#computed-values)
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

### String Interpolation
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
### Property Binding
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
### Computed Values
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

---

## Ejemplos

### Componentes: Crear un componente


```bash


```


---
[🔍 TOP](#índice-de-contenidos)