# OutPuts y output Emitter

> **Fecha:** 23 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
    - [🔧 Output Decorador](#output-decorador)
- [🛠️ Ejemplos](#ejemplos)

---

## Resumen
El Output es un decorador que permiten la comunicación desde un componente hijo hacia un componente padre. Angular ofrece dos formas para implementar outputs: el tradicional decorador `@Output()` y la nueva función `output()` que se basa en el patrón de diseño `EventEmitter`. Ambos métodos permiten emitir eventos desde un componente hijo y escuchar esos eventos en un componente padre.

---

## Descripción

### Output Decorador
El enfoque tradicional utiliza el decorador `@Output()` para marcar una propiedad de clase como salida:

```typescript
@Output() select = new EventEmitter();
```

Él `new EventEmitter()` crea un nuevo objeto que se puede usar para emitir eventos. Este objeto se puede usar en la plantilla para escuchar eventos emitidos por el componente hijo.

En este sentido el componente padre puede escuchar el evento `select` y reaccionar a él, pero antes de eso, el componente hijo debe emitir el evento. Para ello se puede usar el método `emit()` del objeto `EventEmitter`:

```typescript
  onSelectUser(){
    this.select.emit(this.id);
}
```
En este ejemplo una función `onSelectUser()` se encarga de emitir el evento `select` con el valor del id del usuario.

De cierta forma el componente padre puede escuchar el evento `select` y reaccionar a él, para ello se debe de definir el evento en la plantilla del componente padre:

```html
<li>
    <app-user 
            [id]="users[0].id" 
            [avatar]="users[0].avatar" 
            [name]="users[0].name" 
            ()=""/>
</li>
```
Donde los que va dentro de los paréntesis es el nombre del evento que se va a escuchar, en este caso `select`. El valor que se le asigna es la función que se va a ejecutar cuando el evento sea emitido.
entre los paréntesis es el nombre del evento que se va a escuchar, en este caso `select`. El valor que se le asigna es la función que se va a ejecutar cuando el evento sea emitido.
Este evento debe de definise en el componente padre, por lo que se debe de definir la función `onSelectUser()` en el componente padre:

```typescript
  onSelectUser(id: string) {
    console.log("Selected user: "+id);
}
```

Recapitulando, el flujo de datos es el siguiente:
   1. El componente padre define el evento en su plantilla.
   2. El componente hijo emite el evento con el valor deseado.
   3. El componente padre escucha el evento y reacciona a él.
   4. El componente padre puede usar el valor emitido por el componente hijo.

```html
<li>
    <app-user 
            [id]="users[0].id" 
            [avatar]="users[0].avatar" 
            [name]="users[0].name" 
            (select)="onSelectUser($event)"/>
</li>
```
`select` viene de `@Output() select = new EventEmitter();` y `onSelectUser` es la función que se va a ejecutar cuando el evento sea emitido. `$event` es el valor que se emite desde el componente hijo.

### output Emitter

La lógica es básicamente la misma, pero en este caso se usa la función `output()` para crear un nuevo objeto que se puede usar para emitir eventos. Este objeto se puede usar en la plantilla para escuchar eventos emitidos por el componente hijo.

El output() se usa de la siguiente manera, simplemente existe por si se utilizan inputs signals, ya que de esta forma se pueden omitir los decoradores `@Input()` y `@Output()`.

```typescript
  select = output<string>();
```
Simplemente eso es todo lo demas funciona exactamente igual que el decorador `@Output()`, por lo que no es necesario volver a explicar como funciona.



---

## Ejemplos




---
[🔍 TOP](#índice-de-contenidos)