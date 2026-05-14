# 09. Ejercicio Practico
## Introducción
Después de estudiar y desarrollar todos los conceptos explicados a lo largo de esta documentación, el profesor propuso un ejercicio práctico con el objetivo de aplicar los conocimientos aprendidos en una situación real.

Este ejercicio está centrado principalmente en:

- el uso de bucles,
- el recorrido de arrays,
- el control de iteraciones,
- y la creación de funciones de flecha en JavaScript.

A través de esta pequeña práctica, es posible comprobar cómo estructuras como for, while y las arrow functions pueden utilizarse para resolver problemas básicos de programación de forma clara, organizada y eficiente.
## Ejercicio Checkpoint 8
```js
// Lista de nombres
const miLista = ["velma", "exploradora", "jane", "john", "harry"];


// Bucle for
for(let i = 0; i < miLista.length; i++) {
    console.log(miLista[i]);
}


// Bucle while
let contador = 0;

while(contador < miLista.length) {
    console.log(miLista[contador]);
    contador++;
}


// Función de flecha
const saludo = () => {
    return "Hola mundo";
};

console.log(saludo());
```
## Explicación
En este ejercicio se aplican varios de los conceptos fundamentales explicados a lo largo de la documentación, especialmente el uso de bucles y funciones de flecha en JavaScript.

Primero, se crea un array llamado:
```js
miLista
```
que almacena varios nombres dentro de una misma estructura de datos.

Posteriormente, se utiliza un bucle:
```js
for
```
para recorrer automáticamente todos los elementos del array. Durante cada iteración, JavaScript accede a una posición distinta de la lista mediante el índice:
```js
i
```
y muestra cada nombre en consola utilizando:
```js
console.log()
```
Después, el mismo recorrido se realiza utilizando un bucle:
```js
while
```
En este caso, es necesario crear manualmente una variable **contador** para controlar las iteraciones y evitar que el bucle se vuelva infinito. Durante cada repetición, el **contador** permite acceder a una posición distinta del array hasta recorrer completamente **todos** los elementos de la lista.

Finalmente, el ejercicio incluye una función de flecha:
```js
arrow function
```
que devuelve el texto:
```js
"Hola mundo"
```
Este último apartado permite aplicar la **sintaxis moderna** de funciones introducida en JavaScript ES6.

En conjunto, este ejercicio permite practicar:

- recorrido de arrays,
- iteraciones,
- uso de índices,
- control de bucles,
- variables contador,
- y creación de funciones modernas utilizando arrow functions.