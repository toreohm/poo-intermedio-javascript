/*Hacer una copia de un objeto usando recursividad*/

const obj1 = {
  a: {
    a1: "a",
    a2: "a",
  },
  b: "b",
  edita() {
    this.a.a1 = "aaaaaa";
  },
};

function isObject(obj) {
  return typeof obj === "object";
}

function isArray(obj) {
  return Array.isArray(obj);
}

function deepCopy(obj) {
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

/*Reto Platzi: Tu reto es crear una función que aplique Object.freeze a todos los objetos anidados
 de forma recursiva para así realmente lograr bloquear todo el objeto. 
 A esto se le conoce comunmente como deepFreeze.*/

const juan = {
  name: "Juanito",
  approvedCourses: ["Curso 1","Curso 2"],
  caracteristicas: {
    age: 18,
    colorCabello: 'Negro',
    gustos: {
      musica: ['rock', 'punk', 'ska'],
      peliculas: ['drama', 'horros', 'comedia'],
    },
  },
  addCourse(newCourse) {
    console.log("This", this);
    console.log("This.approvedCourses", this.approvedCourses);
    this.approvedCourses.push(newCourse);
  }
};

function deepFreeze(obj) {
  Object.freeze(obj);

  for (let key in obj) {
    if(typeof obj[key] === "object") {
      deepFreeze(obj[key]);
    }
  }
  return obj;
}