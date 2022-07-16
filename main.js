//EJERCICIO: PREGUNTAR AL USUARIO EL AÑO DE SU VEHICULO
//SI EL VEHICULO TIENE MENOS DE 10 AÑOS DE ANTIGUEDAD LE AVISAMOS QUE ABONA 200 DOLARES DE PATENTE ANUAL
//SINO EL VEHICULO ABONA 100 DOLARES DE PATENTE ANUAL



// let modeloVehiculo = parseInt(prompt("Ingrese el modelo de su vehículo"));
// const anioActual = 2022

// if ((anioActual - modeloVehiculo) <= 10){
// 	console.log("Ud. debe abonar 100 de patente");
// } else {
// 	console.log("Ud. debe abonar 200 dolares de patente");
// }

/* let numero =parseInt(prompt("Ingrese un número"));

if ((numero>= 10) && (numero <= 50)){
	alert("Elegiste bien!!");
}else {
	alert("Ese número no sirve");
} */



// BOOKLET//

// ACTIVIDAD 3

/* let name = "Homer";
let surname = "Simpson";
let age = 40;
let identificacion = "10.255.255";
let country = "USA";
let city = "Springfield"


let carnet = "Identificacion: " +identificacion+ " "+  
			 "\nNombre: " +name+ " " +
			 "\nApellido: " +surname+ " " +
			 "\nPais: " +country+ " " +
			 "\nCiudad: " +city+ " ";

console.log("Los datos de su licencia son: " + carnet);

//ACTIIVIDAD 4
 
// let integranteUno = prompt("Ingrese el primer integrante");
// let integranteDos = prompt("Ingrese el segundo integrante");
// let integranteTres = prompt("Ingrese el terer integrante");
// let integranteCuatro = prompt("Ingrese el cuarto integrante");
// let integranteCinco = prompt("Ingrese el quinto integrante");

// let familia= "</br>1.- "+integranteUno+
// 			 "</br>2.- "+integranteDos+
// 			 "</br>3.- "+integranteTres+
// 			 "</br>4.- "+integranteCuatro+
// 			 "</br>5.- "+integranteCinco;

// document.write("Los integrantes de su familia son: "+familia);

//ACTIVIDAD 5
/* let precio = parseFloat(prompt('Ingrese el precio del producto'));
let precioVeinte = precio - (precio*0.2);
let previoTreinta = precio - (precio*0.3);

alert(precioVeinte); */

/* //ACTIVIDAD 1
let nombreUsuario = prompt('Ingrese un nombre!!');
let nombreUno = 'Jorge';
let nombreDos = 'Maria';
let nombreTres = 'Ruperto';

if (nombreUsuario == nombreUno || nombreUsuario == nombreDos || nombreUsuario==nombreTres){
	alert("Fui Yo!!!!!");
}else{
	alert("Yo no fui!!")
} */

//ACTIVIDAD  2
/* let infoUsuario = prompt('Presione una tecla');

if (infoUsuario== "y" || infoUsuario=="Y"){
	alert("Correcto");
}else {
	alert("Respuesta incorrecta");
} */

// for (let i=0; i<=10; i++){
// 	console.log("Hola coders "+i);
// }

let numero = parseInt(prompt("Ingrese un número"))

for(let i=0; i<=numero; i++){
	console.log("Hola "+i);
}