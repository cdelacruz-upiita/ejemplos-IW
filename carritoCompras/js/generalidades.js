/* 
   Sintaxis básica de función flecha 

1. param => expression
2. (param1, paramN) => expression

3. param => {
  let a = 1;
  return a + b;
}

4. (param1, paramN) => {
   let a = 1;
   return a + b;
}

*/

// Función tradicional
function calcular(a){
    return a + 100;
}
  
  // Desglose de la función flecha
  
  // 1. Elimina la palabra "function" y coloca la flecha entre el argumento y el corchete de apertura.
  (a) => {
    return a + 100;
  }
  
  // 2. Quita los corchetes del cuerpo y la palabra "return" — el return está implícito.
  (a) => a + 100;
  
  // 3. Suprime los paréntesis de los argumentos
  () => a + 100;
   
  /* ---------------  */

  // Función tradicional
function calcular2(a, b){
    return a + b + 100;
  }
  
  // Función flecha
  (a, b) => a + b + 100;
  
  // Función tradicional (sin argumentos)
  let a = "prueba";
  let b = 2;

  let f = function (){
    return a + b + 100;
  };
  
  // Función flecha (sin argumentos)
  let a = 4;
  let b = 2;
  () => a + b + 100;

  /*---------------*/
  // Función tradicional
let f2 = function (a, b){
    let chuck = 42;
    return a + b + chuck;
  };
  
  // Función flecha
  (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }
/***** ---------------- ********/
  // Función tradicional
function bob (a){
    return a + 100;
  }
  
  // Función flecha
  let bob = a => a + 100;