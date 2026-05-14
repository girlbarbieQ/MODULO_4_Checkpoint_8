# 08. ¿Qué hacen async y await por nosotros?
![Asincronia](/img/8.png)
## Introducción
A medida que JavaScript comenzó a utilizarse en aplicaciones cada vez más complejas, la programación asíncrona se volvió una parte fundamental del lenguaje.

Muchas operaciones modernas requieren trabajar con procesos que tardan tiempo en completarse, como:
- consultar APIs,
- cargar archivos,
- acceder a bases de datos,
- o comunicarse con servidores externos.

Para resolver este tipo de situaciones, JavaScript introdujo inicialmente las: **Promesas (Promises)**.

Las promesas supusieron una enorme mejora respecto a los callbacks tradicionales, ya que permitían organizar mucho mejor el código asíncrono.

Sin embargo, cuando las aplicaciones crecían, las cadenas de:
```js
.then()
``` 
y
```js
.catch()
``` 
podían comenzar a resultar difíciles de leer y mantener. Aunque las promesas solucionaban muchos problemas, el flujo seguía sintiéndose menos natural que el código síncrono tradicional.

Para simplificar todavía más este proceso, JavaScript introdujo: **async** y **await**.

Estas palabras clave permiten trabajar con **código asíncrono** utilizando una sintaxis mucho más limpia, legible y cercana al comportamiento secuencial tradicional.

Gracias a **async y await**, los desarrolladores pueden escribir **operaciones asíncronas** de una forma muchísimo **más fácil de entender, evitando gran parte de la complejidad visual asociada a las promesas**.

Actualmente, async/await forma parte esencial del JavaScript moderno y aparece constantemente en:
- APIs,
- frameworks,
- servidores,
- peticiones HTTP,
- bases de datos,
- y aplicaciones profesionales.

Comprender correctamente cómo funcionan es fundamental para trabajar con JavaScript moderno.

## ¿Qué hacen async y await?
Las palabras clave: **async** y **await** permiten simplificar el trabajo con promesas y escribir código asíncrono utilizando una sintaxis mucho más parecida al código síncrono tradicional.

Aunque visualmente parecen una característica completamente diferente, internamente: **async/await sigue funcionando mediante promesas**. La gran diferencia es que ayudan a organizar mejor el **flujo de ejecución** y hacen que el código resulte muchísimo más **legible**.

Gracias a este sistema, JavaScript puede seguir manejando operaciones asíncronas sin bloquear completamente la aplicación, pero utilizando una sintaxis mucho más clara y fácil de comprender.

## ¿Por qué surgieron async y await?
Las promesas representaron una enorme mejora respecto a los callbacks tradicionales, pero todavía existían ciertos problemas relacionados con la legibilidad.

Por ejemplo, cuando múltiples operaciones asíncronas debían ejecutarse en secuencia, las cadenas de:
```js
.then()
``` 
comenzaban a crecer considerablemente.
```js
obtenerUsuario()

    .then((usuario) => {

        return obtenerPedidos(usuario);

    })

    .then((pedidos) => {

        return obtenerPago(pedidos);

    })

    .then((pago) => {

        console.log(pago);

    })

    .catch((error) => {

        console.log(error);

    });
``` 

Aunque este código funciona correctamente, el flujo puede resultar **difícil de seguir**, especialmente en aplicaciones grandes.

Para resolver este problema, JavaScript introdujo: **async/await**.

Gracias a esta sintaxis, el código asíncrono puede escribirse de una forma mucho más lineal y natural.

## ¿Qué hace async?
La palabra clave:
```js
async 
```
se utiliza para declarar que una **función** trabajará de forma **asíncrona**.

Cuando JavaScript encuentra una función marcada como:
```js
async 
```
automáticamente hace que esa función **devuelva una promesa**.

Por ejemplo:
```js
async function saludo() {

    return "Hola";

}
```
Aunque aparentemente esta función simplemente devuelve un string, internamente JavaScript lo transforma automáticamente en una promesa resuelta.

Es decir, internamente el comportamiento sería equivalente a:
```js
function saludo() {

    return Promise.resolve("Hola");

}
```
Gracias a esto, cualquier función marcada como:
```js
async 
```
puede utilizar posteriormente:
```js
await 
```
en su interior.

````mermaid
flowchart LR
    A[Función async]
    --> B[JavaScript]
    --> C[Promise automática]
````

## ¿Qué hace await?
La palabra clave:
```js
await 
```
permite pausar temporalmente la ejecución de una función asíncrona hasta que una promesa termine.

Cuando JavaScript encuentra:
```js
await 
```
espera automáticamente el resultado de la promesa antes de continuar ejecutando el resto del código. Por ejemplo:
```js
async function obtenerDatos() {

    const resultado = await promesa;

    console.log(resultado);

}
```
En este caso:
- JavaScript ejecuta la promesa,
- espera hasta que finalice,
- almacena el resultado en:
````js
resultado 
````
- y únicamente después continúa con la siguiente línea.

Gracias a este comportamiento, el flujo del código se vuelve muchísimo más fácil de leer.

## ¿await bloquea JavaScript?

Uno de los errores más comunes consiste en pensar que: **await bloquea completamente JavaScript**. Sin embargo, esto no es correcto.

Cuando JavaScript encuentra:
```js
await 
```
solamente pausa **temporalmente** la ejecución de esa función asíncrona concreta.

Mientras tanto:
- el Event Loop continúa funcionando,
- otras tareas pueden seguir ejecutándose,
- y la aplicación no se congela completamente.

Esto significa que await hace que el código **parezca síncrono visualmente**, pero internamente JavaScript sigue trabajando de forma **asíncrona**.

## Ejemplo realista con async/await
```js
function obtenerDatos() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Datos recibidos");

        }, 3000);

    });

}
```
```js
async function mostrarDatos() {

    console.log("Cargando datos...");

    const resultado = await obtenerDatos();

    console.log(resultado);

    console.log("Proceso finalizado");

} 
```
En este ejemplo, la función:
```js
obtenerDatos()
```
simula una operación lenta utilizando:
```js
setTimeout()
```
Cuando:
```js
mostrarDatos()
```
ejecuta:
```js
await obtenerDatos()
```
JavaScript pausa temporalmente esa función hasta recibir el resultado de la promesa.

Mientras tanto, el resto de la aplicación puede seguir funcionando normalmente.

Cuando la promesa finalmente se resuelve:
- el resultado se almacena en:
````js
resultado 
````
- y la ejecución continúa automáticamente.

Gracias a esto, el código mantiene un flujo mucho más limpio y natural.

````mermaid 
flowchart TD
    A[Función async]

    A --> B[await Promise]

    B --> C[Promise Pending]

    C --> D[Promise Fulfilled]

    D --> E[Continuar ejecución]
````

## Manejo de errores con try...catch

Cuando trabajamos con async/await, los errores suelen manejarse utilizando:
```js
try...catch 
```
```js
async function obtenerUsuario() {

    try {

        const resultado = await promesa;

        console.log(resultado);

    } catch(error) {

        console.log(error);

    }

}
```
En este caso:
- si la promesa se resuelve correctamente,
el código continúa normalmente.

Sin embargo, si la promesa genera un error:
- JavaScript detiene temporalmente la ejecución,
- y el error es capturado automáticamente dentro de:
```js
catch 
```
Esto hace que el manejo de errores resulte mucho más claro y organizado.

## Diferencia entre Promises y async/await
Tanto las promesas tradicionales como async/await permiten trabajar con programación asíncrona.

La diferencia principal es la forma en la que el código se organiza visualmente. Las promesas suelen utilizar cadenas de:
```js
.then() 
```
mientras que async/await permite escribir un flujo mucho más **lineal y parecido al código secuencial tradicional**.

| Promesas | async/await |
|---|---|
| Usa .then() | Usa await |
| Flujo más encadenado | Flujo más lineal |
| Puede resultar más complejo | Mucho más legible |
| Manejo de errores con .catch() | Manejo con try...catch |

## Relación entre async/await y promesas

Aunque visualmente parecen sistemas diferentes, internamente: **async/await sigue utilizando promesas**.
De hecho:
- await únicamente funciona sobre promesas,
- y toda función marcada como:
js id="’wini27" async 
devuelve automáticamente una promesa.

Por este motivo, comprender primero cómo funcionan las promesas resulta fundamental antes de aprender async/await.

## Relación entre async/await y Event Loop
Cuando JavaScript encuentra:
```js
await
```
la función asíncrona se pausa temporalmente mientras la promesa sigue ejecutándose en segundo plano. Durante ese tiempo, el: **Event Loop** continúa gestionando otras tareas normalmente.

Cuando la promesa finalmente termina, el Event Loop detecta que el resultado ya está disponible y reanuda automáticamente la ejecución de la función. Gracias a este sistema, JavaScript puede mantener aplicaciones fluidas incluso mientras espera operaciones lentas.

## Ventajas de async/await
async/await se convirtió rápidamente en una de las características más importantes del JavaScript moderno porque **simplifica** enormemente la programación asíncrona.

Gracias a esta sintaxis:
- el código resulta mucho más limpio,
- más legible,
- y más fácil de mantener.

Además, permite escribir operaciones asíncronas utilizando un flujo visual mucho más natural y facilita enormemente el **manejo de errores**.

Precisamente por esta combinación entre simplicidad y claridad, actualmente async/await es la forma más utilizada de trabajar con asincronía en JavaScript moderno.

## Desventajas de async/await
Aunque async/await simplifica muchísimo el código asíncrono, también presenta ciertas limitaciones.

Comprender correctamente cómo funciona internamente la asincronía sigue siendo importante, ya que async/await únicamente simplifica la sintaxis visual, pero **no elimina la complejidad interna** del sistema asíncrono de JavaScript.

Además, utilizar:
```js
await
```
de forma incorrecta puede provocar ejecuciones innecesariamente **lentas** si múltiples operaciones podrían ejecutarse en paralelo.

Por este motivo, resulta importante comprender correctamente cómo funciona el flujo asíncrono antes de utilizar esta sintaxis en aplicaciones grandes.

## Conclusión

Las palabras clave: **async y await** representan una de las mejoras más importantes introducidas en JavaScript moderno para trabajar con programación asíncrona.

Gracias a esta sintaxis, las operaciones basadas en promesas pueden escribirse de una forma muchísimo más limpia, legible y cercana al código síncrono tradicional.

Conceptos como:
- funciones asíncronas,
- espera de promesas,
- try...catch,
- Event Loop,
- y programación asíncrona,

forman parte esencial del desarrollo moderno en JavaScript.

Comprender correctamente cómo funcionan async y await es fundamental para trabajar profesionalmente con APIs, servidores y aplicaciones modernas.
