const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instragram: undefined,
    facebook: undefined,
  }
};

const hector = deepCopy(studentBase);
Object.seal(hector); //Hace que todas las propiedades no se puedan borrar {configurable: false}.
Object.isSealed(hector); //Podemos comprobar si todas las propiedades de un objeto están bloqueadas a que sean eliminadas.
Object.defineProperty(hector, "name", {
  value: "Hector",
  configurable: false  
});

/*Factory pattern (o fábrica de objeto) y RORO (Recibir un Objeto, Retornar un Objeto) son dos patrones 
que nos ayudan a crear moldes de objetos a partir de funciones. Con ello ya no sería necesario 
utilizar objetos literales ni deep copy con recursividad. */

function requiredParam(param) {
  throw new Error(param + " es obligatorio.");
}

function createStudent({
  name = requiredParam("name"),
  age = requiredParam("age"),
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = []
} = {}) {
  
  const private = {
    "_name": name
  };

  const public = {
    changeName(newName) {
      private._name = newName;
    },
    readName() {
      return private._name;
    },
    //El equivalente con getters y setters
    get name() {
      return private._name;
    },
    set name(newName) {
      if(newName.trim().length != 0) {
        private._name = newName;
      } else {
        console.warn("Tu nombre debe tener al menos un caracter.");
      }
    },
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook
    },
  };

  /*Aplicamos encapsulamiento al proteger la redefinición y eliminación de uno de nuestros métodos.
  Pero a cambio de eso, ya no podremos hacer polimorfismo con el método*/
  Object.defineProperty(public, "changeName", {
    configurable: false,
    writable: false,
  });

  return public;
}

const mario = createStudent({
  name: "Mario Bros",
  age: 18,
  email: "mario@latinmail.com",
  twitter: "mariob",
});
