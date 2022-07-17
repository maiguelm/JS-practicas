//DESAFIO COMPLEMENTARIO

//EJEMPLO 1
/* let numero = parseInt(prompt("Ingrese un numero"));

for (let i=0; i<10; i++){
	let resultado =  numero + i;
	console.log(resultado);

} */

//EJEMPLO 2
let palabra = " "
let letra = prompt("Ingrese una letra para formar una palabra. \nPara finalizar, ingrese ESC");

while (letra !="ESC"){
	palabra = palabra + letra;
	letra= prompt("Ingrese otra letra para formar una palabra. \nPara finalizar, ingrese ESC");
}
alert(`Ud. ha formado la palabra '${palabra}'`);


//EJEMPLO 3

/* let numero = parseInt(prompt("Ingrese un número"));

for(let i=0; i<=numero; i++){
	console.log("Hola "+i);
}
 */