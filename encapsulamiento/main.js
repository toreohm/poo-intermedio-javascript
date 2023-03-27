/*Existe una propuesta experimental para permitir la definición de campos de clase privados utilizando 
un # prefijo hash . */

function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({name = requiredParam("name"), courses = [],}) {
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

const private = {
  "_learningPaths": [],
};

//Vamos a crear getters y setters con prototipos
Object.defineProperty(this, "learningPaths", {
  get() {
    return private["_learningPaths"];
  },
  set(newLP) {
    if(newLP instanceof LearningPath) {
      private["_learningPaths"].push(newLP);
    } else {
      console.warn("Alguno de los LPs no es una instancia del prototipo LearningPath");
    }
  },
  configurable: false
});
  
  for (elemento of learningPaths) {
    this.learningPaths = elemento;
  }   

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  //this._learningPaths = learningPaths;
  this.socialMedia = {
    twitter,
    instagram,
    facebook 
  };
}

const escuelaWeb = new LearningPath({
  name: "Escuela de desarrollo web", 
  courses: ["JS for beginners", "JS intermedio"]});
  
const escuelaData = new LearningPath({name: "Escuela de data analyst"});

const juan = new Student({
  email:"juanito@frijoles.co", 
  name:"Juanito", 
  learningPaths: [escuelaWeb, escuelaData]});

const mario = new Student({
  email:"mario@frijoles.co", 
  name:"Mario", 
  learningPaths: [escuelaWeb, {name: "Escuela del impostor", courses:[]}]});

  //Reto Platzi, Transcribir el prototipo Student con sintaxis de clase

  class Student2 {
    #studentName;
    #learningPaths;
    constructor({
        name = requiredParam("name"),
        edad,
        email = requiredParam("email"),
        twitter,
        facebook,
        instagram,
        learningPaths = [],
        approvedCourses = [],
    }) {
        this.#studentName = name;
        this.edad = edad;
        this.email = email;
        this.socialMedia = {
          twitter,
          facebook,
          instagram,
        };
        this.#learningPaths = [];
        for(let myLp of learningPaths){
            this.lp = myLp;
        }
    }

    get name(){
        return this.#studentName;
    }

    set name(newName){
        this.#studentName = newName;
    }

    get lp() {
        return this.#learningPaths;
    }

    set lp(newLp) {
        if(newLp instanceof LearningPath) {
            this.#learningPaths.push(newLp);
        } else{
            console.warn("Alguno de los LP no es instancia de LearningPath")
        }
    }
  }

  const maria = new Student2({
    email:"maria@frijoles.co", 
    name:"Maria", 
    learningPaths: [escuelaWeb, {name: "Escuela del impostor", courses:[]}]});

//Métodos y atributos static
/*Los métodos y atributos estáticos son llamados sin instanciar su clase y no pueden ser 
llamados mediante una instancia de clase. */

class SuperObject {
  constructor() {
    
  }
  //Las propiedades estaticas van despues del constructor  
  static number = 100;
  static isObject(obj) {
    return typeof subject === "object";
  }
  static deepCopy(obj) {
  let copyObj;
  const objIsArray = isArray(obj);
  const objIsObject = isObject(obj);

  if(objIsArray) {
    copyObj = [];
  } else if(objIsObject) {
    copyObj = {};
  } else {
    return obj;
  }

  for (let key in obj) {
    const keyIsObject = isObject(obj[key]);

    if (objIsArray) {
      copyObj.push(obj[key]);
    } else if (keyIsObject) {
      copyObj[key] = deepCopy(obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }

  return copyObj;
  }
}

//Métodos/atributos estaticos desde un prototipo
//Notese que para que sean estaticos no se usa la propiedad prototype

function SuperObject2() {
}
SuperObject2.sayHello = function () {
  return "Hello!!";
}

SuperObject2.sumar = function (a, b) {
  if ((typeof a === "number") && (typeof b === "number")) {
    return a + b;
  } else {
    return false;
  }
}

SuperObject2.numero = 100;

