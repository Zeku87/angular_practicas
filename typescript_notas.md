# Apuntes de TypeScript
## Proyecto en TypeScript
Para que dentro de un proyecto se compilen todos los ficheros .ts es necesario usar la orden tsc -init que nos creará un JSON donde tendremos propiedades comunes a los ficheros de typescript.

Para transpilar los ficheros .ts de una vez haremos en la terminal tsc y le daremos al enter. Automáticamente se crearán los ficheros .js respectivos 

Si no hacemos los anterior tendremos que transpilar los ficheros uno a uno obligatoriamente.

### Tipos de datos

```Typescript
//Tipos primitivos
let cadena:string = "Typescript es muy seguro"
let numero:number = 2019
let logica:boolean = true

//Tipo compuesto
let fecha:date = new Date('2022-02-28')

//Podemos hacer que la variable sea de cualquier tipo cada vez
let cualquiera:any

cualquiera = cadena
cualquiera = numero
cualquiera = logica

//Typescript genera un tipo de dato especial con los objetos
let persona = {
    nombre: "Juan",
    edad: 22
}
```

### Plantillas de literales

Tenemos dos formas de concatenar literales en un String

```Typescript
let usuario:string = "Fernando Herrera"
let precio:number = 238.34

//Forma 1
let anuncio:string = "Hola " + usuario + ".\nTu compra asciende a " + precio + " EUROS."

//Forma 2: el salto de línea se introduce con un enter
let anuncio2:string = `Hola ${usuario}.
Tu compra asciende a ${precio} EUROS`

```

### Parámetros de entrada

Para las funciones tenemos parámetros obligatorios, por defecto y opcionales.

```Typescript
//signatura genérica
function nombreDeLaFuncion( parametro:tipo ){ ... }

//sea una función con un parámetro obligatorio, uno por defecto y otro opcional
function tresNumeros( n1:number, n2:number = 73, n3?:number){ ... }

//el signo de interrogación nos indica que el parámetro n3 es opcional
//las siguientes llamadas serían correctas
tresNumeros(1)
tresNumeros(1, 34)
tresNumeros(1, 23, 4);

//La siguiente llamada no es correcta
tresNumeros(1, , 4);
```