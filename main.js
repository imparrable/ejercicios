console.log("ejercicio 1");
//1. A partir de la pizza sustituías todos los elemento del array por cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩
const array = ["🍔", "🌯", "🍣", "🍕", "🍜", "🍱", "🍙", "🍘", "🥩"];
const birra = "🍺";
var todobirra = array.map(function () {
  return "🍺";
});
console.log(todobirra);
console.log("ejercicio 2");
//2. Encontrar si existe un elemento en el array que sea una piña. 🍕🍕🍍🍕🍕
var comida = ["🍕", "🍕", "🍍", "🍕", "🍕"];
function buscar(array, icon) {
  console.log(array.includes(icon));
}
buscar(comida, "🍍");
// solucion 2
const array1 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
const isPineapple = (element) => element == "🍍";
console.log(array1.findIndex(isPineapple));
// solucion 3
const array2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
var buscaicons = (array, elemento) => {
  array.forEach((element, position) => {
    if (element == elemento) {
      console.log(
        "Qué guay!" + element + " está en la posición " + position + " :)"
      );
    } else {
      console.log(
        "tu put@ " + elemento + " NO está en " + position + " hay un " + element
      );
    }
  });
};
buscaicons(array2, "🍍");
console.log("ejercicio 3");
//3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕
let detodo = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(detodo.splice(2, 1)); // y si pones (detodo.splice(2, 1, '🍺')); no lo borra sino que lo sustituye por una birra.
console.log(detodo);
/*var quitapinya = () => {
    detodo.indexOf(element);
  
    if (element == "🍍") {
      detodo.splice(element, 1);
      console.log(detodo);
    }
};
quitapinya();
*/
console.log("ejercicio 4");
//4. A partir del siguiente array 🍓🍋🍓🍋🍓 convierte todas las fresas en 🍄
var enunciado4 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
function creachampi(icono) {
  for (let i = 0; i < enunciado4.length; i++) {
    if (enunciado4[i] === icono) {
      enunciado4[i] = "🍄";
    }
    console.log(enunciado4);
  }
}
creachampi("🍓");
console.log("ejercicio 5");
//5. Añade el siguiente icono 🥵 inmediatamente después del cada 🌶️ en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛
console.log("solución 1");
let enunciado5 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
function guindi(icono, enunciado, otre) {
    for (let i = 0; i < enunciado.length; i++) {
      otro = otre;
      if (enunciado[i] === icono) {
        enunciado[i] = enunciado[i] + otro;
      }
      ;
    }
  }
guindi("🌶️", enunciado5, ['🥵']);
console.log(enunciado5);
console.log("solución 2")
//
let enunciado6 = ["🌶️","🥛","🌶️","🥛","🌶️","🥛"];
enunciado6.splice(1, 0, '🥵');
enunciado6.splice(4, 0, '🥵');
enunciado6.splice(7, 0, '🥵');
console.log(enunciado6);
//6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴
let cartas = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
cartas.splice(3, 1)
cartas.splice(1, 0, '🃏');
cartas.splice(4, 0, '🃏');
cartas.splice(7, 0, '🃏');
console.log(cartas);
// solucion 2
console.log("solucion2");
let cartas2 = ["🎴","🎴","🎴","🃏","🎴","🎴","🎴"];
let joker = [];
cartas2.forEach((item, position, array) => {
   item === array[position+1]?joker.push(item, "🃏"):joker.push(item);
});
console.log(joker);