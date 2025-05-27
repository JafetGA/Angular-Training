# Formularios y Controles de Formulario

> **Fecha:** 26 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [📚 Crear un Componente de Formulario](#crear-un-componente-de-formulario)
    - [Directivas de Angular para Formularios](#directivas-de-angular-para-formularios)
    - [Recibo de Datos en el Componente Padre](#recibo-de-datos-en-el-componente-padre)
- [🛠️ Ejemplos](#ejemplos)
    - [Crear un componente](#componentes-crear-un-componente)

---

## Resumen
Los formularios son una parte esencial de las aplicaciones web, permitiendo a los usuarios interactuar con la aplicación, enviar datos y recibir respuestas. En este documento, exploraremos cómo crear y gestionar formularios en tu aplicación, incluyendo la creación de componentes para manejar la lógica del formulario.

---

## Descripción
Para crear un formulario en tu aplicación, puedes utilizar componentes que encapsulen la lógica y el estado del formulario. Esto te permite manejar la entrada del usuario de manera eficiente y mantener el código organizado.

Al crear un componente para un formulario, debemos de mandarlo al componente padre para que este pueda ser utilizado en la aplicación.

### Crear un Componente de Formulario
Debemos de entender que para mandar la información entre componentes, debemos de definir un evento, esto se logra con `EventEmitter`  y  `Output`, además, debemos de definir las variables que van a almacenar los datos del formulario.

```typescript
export class NewTaskComponent {
    @Output() createTask = new EventEmitter<NewTask>();
    enteredTitle: string = '';
    enteredSummary: string = '';
    enteredDate: string = '';
}
```
> El NewTask es un typo, creado a partir de una interfaz que define la estructura de los datos del formulario.
> ```typescript
> export interface NewTask {
>   title: string;
>   summary: string;
>   date: string;
> }
>```

El template de nuestro componente debe de tener un `form` que se va a encargar de manejar los datos del formulario, además de un botón que va a disparar el evento para enviar los datos al componente padre.

```html
<form">
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title"/>
  </p>

  <p>
    <label for="summary">Summary</label>
    <textarea id="summary" rows="5" name="summary" ></textarea>
  </p>

  <p>
    <label for="due-date">Due Date</label>
    <input type="date" id="due-date" name="due-date" />
  </p>

  <p class="actions">
    <button type="button">Cancel</button>
    <button type="submit">Create</button>
  </p>
</form>
```
De esta forma ahora tenemos la posibilidad de controlar el contenido del formulario utilizando Angular, para ello angular tiene definidas propiedades dentro del HTML que nos permiten enlazar los datos del formulario con las variables del componente.
### Directivas de Angular para Formularios
Las directivas que veremos ahora son:
- `ngSumit`: Se utiliza para manejar el evento de envío del formulario. Por defecto el submit recarga la página y manda el contenido del formulario al mismo servidor, por lo que debemos de prevenir este comportamiento.
- `ngModel`: Se utiliza para enlazar los datos del formulario con las variables del componente. Permite que los cambios en el formulario se reflejen automáticamente en las variables del componente y viceversa.

```html
<form (ngSubmit)="onSubmit()">
  <p>
    <label for="title">Title</label>
    <input type="text" id="title" name="title" [(ngModel)]="enteredTitle"/>
  </p>

  <p>
    <label for="summary">Summary</label>
    <textarea id="summary" rows="5" name="summary" [(ngModel)]="enteredSummary"></textarea>
  </p>

  <p>
    <label for="due-date">Due Date</label>
    <input type="date" id="due-date" name="due-date" [(ngModel)]="enteredDate"/>
  </p>

  <p class="actions">
    <button type="button" (click)="onCancelTask()">Cancel</button>
    <button type="submit">Create</button>
  </p>
</form>
```
`ngSubmit` se utiliza como un evento por esta razón, debemos de definir un método en el componente que se va a encargar de manejar el evento de envío del formulario.

```typescript
export class NewTaskComponent {
  @Output() createTask = new EventEmitter<NewTask>();
  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';
  
  onSubmit() {
    this.createTask.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
```

`ngModel` Se debe de utilizar con `[()]` Esto es así porque estamos utilizando el "two-way data binding" (enlace bidireccional de datos) que permite que los cambios en el formulario se reflejen automáticamente en las variables del componente y viceversa.

### Recibo de Datos en el Componente Padre
Como hemos definido hasta ahora el envío de los datos del formulario se debe de hacer desde un Output, por lo que debemos de definir un evento en el componente padre que se va a encargar de recibir los datos del formulario.

```html
<app-new-task (cancelTaskCreation)="onCancelTaskCreation()" (createTask)="createTask($event)"/>
```
El componente `app-new-task` es el componente que hemos creado para manejar el formulario. El evento `createTask` se dispara cuando el usuario envía el formulario, y el evento `cancelTaskCreation` se dispara cuando el usuario cancela la creación de la tarea.

Ahora el componente padre tine acceso a los datos del formulario y puede utilizarlos para crear una nueva tarea o realizar cualquier otra acción necesaria.



---

## Ejemplos

### Componentes: Crear un componente


```bash


```


---
[🔍 TOP](#índice-de-contenidos)