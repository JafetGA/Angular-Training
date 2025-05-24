# Visualización de Componentes Angular

> **Fecha:** 23 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [🔧 type ](#type)
  - [🔧 interface](#interface)
  - [🔧 type vs interface](#type-vs-interface)
- [🛠️ Ejemplos](#ejemplos)
    - [Simplificación de inputs usando una interfaz o tipo común](#simplificación-de-inputs-usando-una-interfaz-o-tipo-común)

---

## Resumen
En esta sección veremos como Angular aprovecha los tipos de datos de TypeScript para crear una mejor experiencia de desarrollo.

---

## Descripción
### type
Es una forma de definir un tipo de dato en TypeScript. Permite crear tipos personalizados que pueden ser utilizados en diferentes partes de la aplicación.

```typescript
type User = {
    id: string;
    name: string;
    avatar: string;
}
```

### interface
Es una forma de definir un contrato para un objeto en TypeScript. Permite definir la estructura de un objeto y sus propiedades.

```typescript
interface User {
    id: string;
    name: string;
    avatar: string;
}
```

### type vs interface

En TypeScript, tanto `type` como `interface` se usan para describir la forma de un objeto, pero tienen diferencias clave en su uso y capacidades.

---

#### 1. Definición básica

Ambos se pueden usar para definir la forma de un objeto o una función:

```ts
// Interface
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

// Type alias
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

---

#### 2. Otros tipos permitidos solo en `type`

El alias `type` permite representar tipos primitivos, uniones, y tuplas, lo que no es posible con `interface`.

```ts
// Primitivo
type Name = string;

// Objetos parciales
type PartialPointX = { x: number; };
type PartialPointY = { y: number; };

// Unión
type PartialPoint = PartialPointX | PartialPointY;

// Tupla
type Data = [number, string];
```

---

#### 3. Extensión

Ambos pueden extender otros tipos, aunque con distinta sintaxis. Además, pueden extenderse entre sí.

```ts
// Interface extiende interface
interface PartialPointX { x: number; }
interface Point extends PartialPointX { y: number; }

// Type alias extiende type alias
type PartialPointX = { x: number; };
type Point = PartialPointX & { y: number; };

// Interface extiende type alias
type PartialPointX = { x: number; };
interface Point extends PartialPointX { y: number; }

// Type alias extiende interface
interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
```

---

#### 4. Implementación en clases

Tanto `type` como `interface` pueden ser implementados por una clase, siempre que no sean uniones.

```ts
// Interface
interface Point {
  x: number;
  y: number;
}

class SomePoint implements Point {
  x = 1;
  y = 2;
}

// Type alias
type Point2 = {
  x: number;
  y: number;
};

class SomePoint2 implements Point2 {
  x = 1;
  y = 2;
}

// ❌ No se puede implementar un tipo unión
type PartialPoint = { x: number; } | { y: number; };

class SomePartialPoint implements PartialPoint { // Error
  x = 1;
  y = 2;
}
```

---

#### 5. Fusión de declaraciones (`declaration merging`)

Solo las `interface` permiten fusión de declaraciones: múltiples declaraciones con el mismo nombre se combinan.

```ts
interface Point { x: number; }
interface Point { y: number; }

const point: Point = { x: 1, y: 2 }; // ✓ válido
```

---

#### Conclusión

* Usa `interface` cuando estés definiendo la forma de objetos o clases, especialmente si necesitas extender o combinar múltiples definiciones.
* Usa `type` cuando necesites uniones, tuplas, tipos primitivos o más flexibilidad.

Ambos son herramientas poderosas y pueden usarse juntos según lo necesite tu proyecto.

---


---

## Ejemplos

### Simplificación de inputs usando una interfaz o tipo común

Por ejemplo, si tenemos muchos atributos que comparten el mismo tipo, podemos crear un tipo para esos atributos.

En este caso, vemos que nuestro componente `user.component.ts` tiene atributos que se pueden compartir para ello definimos un `User` ya sea `interface` o `type`.
```typescript
export class UserComponent {
    @Input({required: true}) id!: string;
    @Input({required: true}) avatar!: string;
    @Input({required: true}) name!: string;
}
```
Pasaría a
```typescript
interface User {
    id: string;
    avatar: string;
    name: string;
}

export class UserComponent {
    @Input({required: true}) user!: User;
}
```
Lo cual es más fácil de leer y entender.

Para nuestro, template ahora se reducen los atributos a solo uno, y podemos acceder a los atributos del objeto `user` directamente.
```html
<li>
  <app-user [user]="users[0]" (select)="onSelectUser($event)"/>
</li>
```

---
[🔍 TOP](#índice-de-contenidos)