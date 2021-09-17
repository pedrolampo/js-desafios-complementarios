// Clase Persona con un constructor de objetos
class Persona {
  constructor(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }
}

// Array que va a contener a los objetos
const personas = [];

// Objetos creados y pusheas al array "personas"
personas.push(new Persona('Julio', 39, 'Masculino'));
personas.push(new Persona('María', 25, 'Femenino'));
personas.push(new Persona('Eve', 27, 'Femenino'));
personas.push(new Persona('Darío', 33, 'Masculino'));

// Función que compara los parametros edad
const ordenar = (a, b) => {
  if (a.edad < b.edad) {
    return -1;
  } else if (a.edad > b.edad) {
    return 1;
  } else {
    return 0;
  }
};

// El método sort() toma como parámetro la función "ordenar", ordenando a los objetos según el valor que la misma devuelve
console.log(personas.sort(ordenar));
