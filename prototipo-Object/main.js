/*Los atributos y métodos estáticos en JavaScript, son llamados sin instanciar su clase 
y no pueden ser llamados mediante una instancia de clase. */

/*Métodos estáticos del prototipo Object*/

const juan = {
  name: "Juanito",
  age: 18,
  approvedCourses: ["Curso 1"],
  addCourse(newCourse) {
    console.log("this", this);
    console.log("this.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

console.log(Object.keys(juan));
console.log(Object.values(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
//console.log(Object.entries(juan)[3]);
//console.log(Object.entries(juan)[3][0]);
console.log(Object.entries(juan)[3][1]);

/*En el siguiente console.log vemos que el contexto de this cambia. Por lo que no funciona la ejecución del método y nos da error*/
//console.log(Object.entries(juan)[3][1]("Curso 2"));
/*Con respecto al console.log anterior podemos intentar lo siguiente: */
console.log(Object.entries(juan)[3][1].bind(juan)("curso 2"));
/*El método bind() crea una nueva función, que cuando es llamada, asigna a su operador this el valor entregado*/


Object.defineProperty(juan, "pruebaNasa", {
  value: "alien",
  writable: false, //No se puede editar el valor de la propiedad
  enumerable: false, //No aparece la propiead en Object.keys(juan) ni el for(let keys in juan), pero sí en Object.getOwnPropertyNames(juan)
  configurable: false,  // delete juan.propiedad no funciona, no puedes borrar la propiedad.
});

Object.defineProperty(juan, "navigator", {
  value: "Chrome",
  writable: true,
  enumerable: false,
  configurable: true, 
});

Object.defineProperty(juan, "editor", {
  value: "VSCode",
  writable: false,
  enumerable: true,
  configurable: true, 
});

Object.defineProperty(juan, "terminal", {
  value: "WSL",
  writable: true,
  enumerable: true,
  configurable: false, 
});

/*Object.seal hace que las propiedades no se puedan borrar {configurable: false}*/
Object.seal(juan);
/*Object.freeze hace que las propiedades no se puedan borrar ni editar {configurable: false, writable: false} */
Object.freeze(juan);

console.log(Object.getOwnPropertyDescriptors(juan));

