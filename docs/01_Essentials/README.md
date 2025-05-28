# 🧠 Resumen: Fundamentos esenciales de Angular

## Indice
* [Componentes en Angular](#-componentes-en-angular)
* [Comunicación entre Componentes](#-comunicación-entre-componentes)
* [Enlaces y bindings](#-enlaces-y-bindings)
* [Detección de cambios y reactividad](#-detección-de-cambios-y-reactividad)
* [Renderizado condicional y listas](#-renderizado-condicional-y-listas)
* [Estilos y contenido proyectado](#-estilos-y-contenido-proyectado)
* [Pipes (Tuberías)](#-pipes-tuberías)
* [Formularios y manejo de eventos](#-formularios-y-manejo-de-eventos)
* [Servicios e Inyección de Dependencias](#-servicios-e-inyección-de-dependencias)
* [Conclusión](#-conclusión)

## 🧩 Componentes en Angular

* Angular se basa en **Componentes** para construir interfaces de usuario complejas.
* Un **Componente** es una clase decorada con `@Component`, que define:

    * `selector`: nombre personalizado del elemento HTML.
    * `templateUrl`: ubicación de la plantilla HTML.
    * `styleUrls`: estilos del componente.

```ts
@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
```

* Los componentes se **anidan entre sí** formando un árbol.

---

## 🔄 Comunicación entre Componentes

* **@Input**: permite recibir datos desde un componente padre.
* **@Output**: permite emitir eventos personalizados hacia el padre.

```ts
@Input() dato: string;
@Output() cambio = new EventEmitter<string>();
```

---

## 🔗 Enlaces y bindings

### 📌 Tipos de binding en plantillas:

* **Interpolación** (`{{valor}}`) → muestra valores en texto.
* **Binding de propiedades** (`[propiedad]="valor"`) → enlaza atributos del DOM.
* **Binding de eventos** (`(evento)="accion()"`) → ejecuta código ante eventos.
* **Binding bidireccional** (`[(ngModel)]="variable"`) → lectura/escritura en inputs (requiere `FormsModule`).

```html
<input [(ngModel)]="nombre" />
```

---

## 🌀 Detección de cambios y reactividad

* Angular utiliza `zone.js` para detectar cambios automáticamente.
* Desde Angular 16, se puede usar **Signals** como alternativa más eficiente:

    * Cambios explícitos con `signal.set()`.
    * Angular suscribe automáticamente a los lectores del `signal`.

```ts
import { signal } from '@angular/core';

const contador = signal(0);
contador.set(1);
```

---

## 🔁 Renderizado condicional y listas

* Desde Angular 17:

    * `@if` → condicionales más legibles.
    * `@for` → bucles sobre listas.

```html
@for (item of items; track item.id) {
  <div>{{ item.nombre }}</div>
}
```

* En versiones anteriores:

    * `*ngIf` para condicionales.
    * `*ngFor` para listas.

---

## 🎨 Estilos y contenido proyectado

* **Class binding**: aplica clases dinámicamente.

  ```html
  <div [class.activo]="esActivo"></div>
  ```

* **ng-content**: permite insertar contenido hijo dinámico (slots).

  ```html
  <ng-content></ng-content>
  ```

---

## 🧪 Pipes (Tuberías)

* Transforman valores en plantillas.

    * Ej: `date`, `uppercase`, `currency`.

```html
<p>{{ fecha | date:'short' }}</p>
```

---

## 📝 Formularios y manejo de eventos

* Escucha el evento `ngSubmit` para formularios.
* Previene el envío por defecto del navegador.
* Permite manejar la lógica del formulario en Angular.

```html
<form (ngSubmit)="guardar()">
  ...
</form>
```

---

## 🛠️ Servicios e Inyección de Dependencias

* Los **Servicios** encapsulan lógica y datos reutilizables.
* Se declaran con `@Injectable` y se **inyectan** en componentes.

```ts
@Injectable({ providedIn: 'root' })
export class MiServicio {
  obtenerDatos() { ... }
}

// Inyección por constructor
constructor(private servicio: MiServicio) {}
```

---

## ✅ Conclusión

Has aprendido los fundamentos clave de Angular:

* Componentes y su estructura.
* Comunicación entre componentes.
* Vínculos de datos y eventos.
* Reactividad y detección de cambios.
* Renderizado condicional y bucles.
* Uso de pipes y estilos dinámicos.
* Manejo de formularios.
* Servicios e inyección de dependencias.

