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