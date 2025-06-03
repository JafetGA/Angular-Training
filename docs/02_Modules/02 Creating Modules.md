# Trabajar con módulos en Angular

> **Fecha:** 02 de junio 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [📦 Módulo Raíz](#módulo-raíz)
  - [📦 Declaración de Módulos](#declaración-de-módulos)
  - [📦 Módulos compartidos](#módulos-compartidos)
- [📚 Ejemplos](#ejemplos)

---

## Resumen
Los módulos en Angular son una forma de organizar y encapsular funcionalidades relacionadas dentro de una aplicación. Permiten agrupar componentes, servicios, directivas y otros elementos para facilitar su gestión y reutilización.

---

## Descripción
### Módulo Raíz
Al iniciar una aplicación de Angular de forma tradicional, lo que estamos haciendo es crear un módulo raíz, que es el punto de entrada de la aplicación. Este módulo raíz se define en el archivo `app.module.ts` y contiene la configuración básica de la aplicación.

La estructura de este módulo raíz incluye:
```typescript
@NgModule({
    declarations: [
        ...
    ],

    bootstrap: [AppComponent],
    imports: [
        ...
    ],
})
export class AppModule {

}
```
La anotación `@NgModule` es fundamental, ya que define un módulo de Angular. Dentro de esta anotación, se especifican las siguientes propiedades:
- **declarations**: Aquí se declaran los componentes, directivas que pertenecen a este módulo.
- **bootstrap**: Indica el componente raíz que se cargará al iniciar la aplicación.
- **imports**: Lista de otros módulos que este módulo necesita para funcionar correctamente.

### Declaración de Módulos
Los componentes que forman parte de nuestra aplicación tienen un atributo conocido como `standalone`, que indica si el componente es independiente o no.

Para usar un componente dentro de un módulo, es necesario declararlo en la sección `declarations` del módulo correspondiente. Esto permite que Angular reconozca y gestione el componente dentro del contexto del módulo debemos de hacer `standalone = false`.

Ahora si este componente usa o depende de otros componentes, nos olvidamos de declarar sus dependencias en el mismo componente, las dependencias que este utilize deben de ser importadas en el módulo raíz o en el módulo que lo declare.

La estructura de un componente convertido a módulo sería:
```typescript
@Component({
    selector: 'app-MyComponent',
    standalone: false,
    templateUrl: './MyComponent.component.html',
    styleUrl: './MyComponent.component.css',
})
export class MyComponentComponent {
}
```
De esta forma se simplifica el componente y se permite que Angular gestione sus dependencias de manera más eficiente.
### Módulos compartidos
Habrá ocasiones en las que varios componentes necesiten compartir funcionalidades o dependencias. En estos casos, se pueden crear módulos compartidos que encapsulen estas funcionalidades comunes.
Estos módulos se definen de manera similar al módulo raíz, pero se enfocan en agrupar componentes, directivas y servicios que serán utilizados por otros módulos.

```typescript
@NgModule({
  declarations: [...],
  exports: [...],
  imports: [...],
})
export class MyModule {}
```
Se omite la propiedad `bootstrap` ya que estos módulos no son puntos de entrada de la aplicación, sino que se utilizan para compartir funcionalidades entre otros módulos.
- `declarations`: Declara los componentes, directivas y tuberías que pertenecen a este módulo.
- `exports`: Especifica qué componentes, directivas y tuberías estarán disponibles para otros módulos que importen este módulo.
- `imports`: Lista de otros módulos que este módulo necesita para funcionar correctamente.

>`exports` Puede exportar componentes que necesaria deben de ser visibles para otros componentes, pero no necesaria debe de exportar todos los componentes dentro del módulo, solo los que son necesarios.

---

## Ejemplos



---
[🔍 TOP](#índice-de-contenidos)