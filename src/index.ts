/*Desarrollar un algoritmo que dado un numero,
  ingresado por el usuario determine si el
  numero es par o impar y le informe al usuario.
  En caso de ser 0(cero) el algoritmo deberá 
  informarlo.*/

let numeroParImpar: number = Number(prompt("Ingrese un numero"));

if (numeroParImpar % 2 === 0) {
  alert("El numero " + numeroParImpar + " es par");
  console.log("el numero ingresado es par");
} else if (numeroParImpar === 0) {
  alert("El numero " + numeroParImpar + " es cero");
} else {
  alert("El numero " + numeroParImpar + " es impar");
  console.log("El numero ingresado es impar");
}
