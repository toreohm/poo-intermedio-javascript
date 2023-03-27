/*El duck typing es la forma de programar donde identificamos los elementos por los métodos y atributos que 
tenga por dentro. 
Si queremos determinar quién es quién, se debe mirar por sus atributos y métodos, aunque puede haber 
el caso en el que haya elementos parecidos que también se deben diferenciar (impostores), es cuando 
más detalle se debe poner en identificar qué los componentes.*/

function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
  name = requiredParam("name"),
  courses = [],
}) {

 const private = {
    "_name": name,
    "_courses": courses,
  };

  const public = {
    get name() {
      return private["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        private["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },

    get courses() {
      return private["_courses"];
    },
  };

  return public;
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    "_name": name,
    "_learningPaths": learningPaths,
  };

  const publicAtributos = {
    email,
    age,
    approvedCourses,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() {
      return privateAtributos["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
    get learningPaths() {
      return privateAtributos["_learningPaths"];
    },
    //Aquí aplicamos duck typing
		set learningPaths(newLP) {
      if (!newLP.name) {
        console.warn("Tu LP no tiene la propiedad name");
        return;
      }
      if(!newLP.courses) {
        console.warn("Tu LP no tiene courses.");
        return;
      }
      if(!isArray(newLP.courses)) {
        console.warn("Tu LP no es una lista de courses.");
        return;
      }

      privateAtributos["_learningPaths"].push(newLP);
    },
  };

  return publicAtributos;
}

const juan = createStudent({email:"juanito@frijoles.co",name:"Juanito"});