/*Es el acto de una función llamándose a sí misma. La recursión es utilizada para resolver problemas 
que contienen subproblemas más pequeños. Una función recursiva puede recibir 2 entradas: 
un caso base (finaliza la recursión) o un un caso recursivo (continúa la recursión).*/

{
  let numero = 0;
  const numeros = [0,1,2,3,4,5,6,7,8,9,10,11];

  for(let index = 0; index < numeros.length; index++) {
    numero = numeros[index];
    console.log({index, numero});
  }
}

{
  const numeros = [0,1,2,3,4,5,6,7,8,9,10,11];
  function recursiva(arrayNumeros) {
    if(arrayNumeros.length != 0) {
      const firstNumber = arrayNumeros[0];
      arrayNumeros.shift();
      console.log(firstNumber);
      return recursiva(arrayNumeros);
    }
  }
  recursiva(numeros);
}

/*Reto FreeCodeCamp: Escribe un programa que invierta una cadena usando recursión. 
Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".*/

  function invertirCadena(cadena, index = null, indexStart = 0) {
    let _index = index ?? cadena.length -1;
    let letra, cadena2, tempArray;
    //console.log({_index, cadena});

    if(_index === 0 || _index < 0) {
      return cadena;
    }

    letra = cadena[cadena.length -1];

    if(_index === cadena.length -1) {
      cadena2 = letra + cadena.slice(0,cadena.length -1);
    } else {
      tempArray = cadena.slice(0,cadena.length -1).split("");
      tempArray.splice(indexStart,0,letra);
      cadena2 = tempArray.join("");
    }
   
    _index--;
    indexStart++;
    
    return invertirCadena(cadena2, _index, indexStart);
  }

