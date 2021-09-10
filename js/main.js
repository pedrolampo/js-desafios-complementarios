let esPar = parseInt(prompt('Ingrese un numero a verificar:'));
let cantSumar = prompt('¿Cuántos números desea sumar? \nMínimo 2, máximo 5.');
let parImpar;
let resultado;

let verifPar = (num) => {
  let parImpar = num % 2;

  if (parImpar == 0) {
    console.log('El número ' + esPar + ' es par.');
  } else {
    console.log('El número ' + esPar + ' es impar.');
  }
};

let suma = (a, b, c, d, e) => {
  let resultado = a + b + c + d + e;
  console.log('El resultado es: ' + resultado);
};

verifPar(esPar);

if (cantSumar == 2) {
  let num1 = parseInt(prompt('Ingrese un numero a sumar:'));
  let num2 = parseInt(prompt('Ingrese otro numero a sumar:'));
  suma(num1, num2, null, null, null);
} else if (cantSumar == 3) {
  let num1 = parseInt(prompt('Ingrese un numero a sumar:'));
  let num2 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num3 = parseInt(prompt('Ingrese otro numero a sumar:'));
  suma(num1, num2, num3, null, null);
} else if (cantSumar == 4) {
  let num1 = parseInt(prompt('Ingrese un numero a sumar:'));
  let num2 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num3 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num4 = parseInt(prompt('Ingrese otro numero a sumar:'));
  suma(num1, num2, num3, num4, null);
} else if (cantSumar == 5) {
  let num1 = parseInt(prompt('Ingrese un numero a sumar:'));
  let num2 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num3 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num4 = parseInt(prompt('Ingrese otro numero a sumar:'));
  let num5 = parseInt(prompt('Ingrese otro numero a sumar:'));
  suma(num1, num2, num3, num4, num5);
} else {
  alert('El valor no es válido.');
}
