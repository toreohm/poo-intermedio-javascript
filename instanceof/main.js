/*Con instanceof podemos saber si un objeto es instancia de cierto prototipo. Esto nos devuelve true o false.
Y es una forma que nos puede ayudar con el duck typing.
Por ejemplo, podremos saber si le estamos pasando un objeto literal o una instancia de un prototipo 
como argumento a una función. */

function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [],}) {
  this.name = name;
  this.courses = courses;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  
  if(!isArray(learningPaths)) {
    console.warn("learningPaths NO es un array");
    return;
  }

  for (elemento of learningPaths) {
    //console.log({learningPaths, elemento, isInstanceOf: elemento instanceof LearningPath});
    
    /*En el if se requiere envolver la expresión en parentesis porque el operador not(!) tiene
    mayor precedencia que el instanceof*/
    if(!(elemento instanceof LearningPath)) {
      console.warn("learningPath NO es un verdadero LearningPath");
      return;
    }
  } 

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.learningPaths = learningPaths;
  this.socialMedia = {
    twitter,
    instagram,
    facebook 
  };

}

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web", 
  courses: ["JS for beginners", "JS intermedio"]});
  
const escuelaData = new LearningPath({name: "Escuela de desarrollo web"});

const juan = new Student({
  email:"juanito@frijoles.co", 
  name:"Juanito", 
  learningPaths: [escuelaWeb, escuelaData]});

const mario = new Student({
  email:"mario@frijoles.co", 
  name:"Mario", 
  learningPaths: [escuelaWeb, {name: "Escuela del impostor", courses:[]}]});
