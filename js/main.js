let esPar = parseInt(prompt('Ingrese un numero a verificar:'));
let numsASumar = prompt(
  'Ingrese los números a sumar. \nPara ver el resultado escriba ESC'
);
let parImpar;
let numeros = 0;
let numsParseados;

const verifPar = (num) => {
  let parImpar = num % 2;

  if (parImpar == 0) {
    console.log('El número ' + esPar + ' es par.');
  } else {
    console.log('El número ' + esPar + ' es impar.');
  }
};

verifPar(esPar);

while (numsASumar !== 'ESC') {
  numsParseados = parseInt(numsASumar);
  numeros = numeros + numsParseados;
  numsASumar = prompt(
    'Ingrese los números a sumar. \nPara ver el resultado escriba ESC'
  );
}
console.log(`El resultado es: ${numeros}.`);
