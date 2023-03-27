const obj1 = {a: 1, b: "b", c: {d: "d", e: "e"}};
const obj2 = {};

/*En el caso de la propiedad "c" sí se copiaria por referencia porque su valor es otro objeto */
for (let property in obj1) {
  obj2[property] = obj1[property];
}

/*El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente 
a un objeto destino. Devuelve el objeto destino. */
const obj3 = Object.assign({}, obj1); //{a: 1, b: "b", c: {d: "d", e: "e"}}

/*Con respecto al método Object.assign(), las propiedades en el objeto destino serán sobrescritas 
por las propiedades en las fuentes si tienen la misma clave. 
Propiedades posteriores de las fuentes podrán sobrescribir las anteriores.*/

{
//Otro ejemplo:
const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true
}

/*El método Object.create() crea un objeto nuevo, utilizando un objeto existente como el prototipo 
del nuevo objeto creado. Esto es para herencia simple.*/
const obj4 = Object.create(obj1);
