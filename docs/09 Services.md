# Services and Dependency Injection

> **Fecha:** 26 de mayo 2025

---
## Índice de Contenidos
- [🔍 Resumen](#resumen)
- [💡 Descripción](#descripción)
  - [¿Por qué Servicios?](#por-qué-servicios)
  - [Estructura de un Servicio](#estructura-de-un-servicio)
  - [Utilizando un Servicio en un Componente](#utilizando-un-servicio-en-un-componente)
  - [Inyección de Dependencias](#inyección-de-dependencias)
- [🛠️ Ejemplos](#ejemplos)
    - [Crear un componente](#componentes-crear-un-componente)

---

## Resumen
En Angular, los servicios son objetos que encapsulan lógica de negocio y pueden ser compartidos entre diferentes componentes. La inyección de dependencias es un patrón que permite a Angular gestionar la creación y el ciclo de vida de estos servicios, facilitando su reutilización y mantenimiento.

---

## Descripción
### ¿Por qué Servicios?
Los servicios se utilizan cuando se necesita compartir lógica o datos entre múltiples componentes. Por ejemplo, un servicio puede manejar la comunicación con una API, gestionar el estado de la aplicación o realizar cálculos complejos.
### Estructura de un Servicio
Los servicios son clases que se definen con el decorador `@Injectable()`. Este decorador indica a Angular que la clase puede ser inyectada como una dependencia en otros componentes o servicios.

```typescript
@Injectable({ providedIn: 'root' })
class MyService{
    getData(){
        return "Datos del servicio";
    }
}
```
La propiedad `providedIn: 'root'` indica que el servicio estará disponible en toda la aplicación, lo que significa que Angular creará una única instancia del servicio y la compartirá entre todos los componentes que lo necesiten.

### Utilizando un Servicio en un Componente
Para utilizar un servicio en un componente, se inyecta el servicio en el constructor del componente. Angular se encargará de crear una instancia del servicio y proporcionarla al componente.

```typescript

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css'
})
class MyComponent {
  constructor(private myService: MyService) {}
  
  getData() {
    return this.myService.getData();
  }
}
```
### Inyección de Dependencias

La inyección de dependencias es el mecanismo que Angular utiliza para proporcionar instancias de servicios a los componentes. Cuando un componente declara una dependencia en su constructor, Angular busca un servicio que coincida con el tipo especificado y lo inyecta automáticamente.

```typescript
constructor (private myService: MyService) {}
```
Esto ocurre en el momento de la creación del componente, lo que significa que el servicio estará disponible desde el inicio del ciclo de vida del componente.

Otra forma de agregar un servicio por medio de su inyección es utilizar el método `inject()` el cual proviene de `@angular/core`. Este método permite inyectar servicios de manera más explícita, aunque su uso es menos común en comparación con la inyección a través del constructor.

```typescript
private myService = inject(MyService);
```
Con esta forma tenemos el mismo funcionamiento que con una inyección directa en el constructor.

---

##
Ejemplos

###
Componentes: Crear
un
componente


        ```bash


```


---
[🔍 TOP](#índice-de-contenidos)