console.log("ejercicio 1");
//1. A partir de la pizza sustituΓ­as todos los elemento del array por cervezas:ππ―π£πππ±πππ₯©
const array = ["π", "π―", "π£", "π", "π", "π±", "π", "π", "π₯©"];
const birra = "πΊ";
var todobirra = array.map(function () {
  return "πΊ";
});
console.log(todobirra);
console.log("ejercicio 2");
//2. Encontrar si existe un elemento en el array que sea una piΓ±a. πππππ
var comida = ["π", "π", "π", "π", "π"];
function buscar(array, icon) {
  console.log(array.includes(icon));
}
buscar(comida, "π");
// solucion 2
const array1 = ["π", "π", "π", "π", "π"];
const isPineapple = (element) => element == "π";
console.log(array1.findIndex(isPineapple));
// solucion 3
const array2 = ["π", "π", "π", "π", "π"];
var buscaicons = (array, elemento) => {
  array.forEach((element, position) => {
    if (element == elemento) {
      console.log(
        "QuΓ© guay!" + element + " estΓ‘ en la posiciΓ³n " + position + " :)"
      );
    } else {
      console.log(
        "tu put@ " + elemento + " NO estΓ‘ en " + position + " hay un " + element
      );
    }
  });
};
buscaicons(array2, "π");
console.log("ejercicio 3");
//3. Quita la piΓ±a del siguiente array. πππππ
let detodo = ["π", "π", "π", "π", "π"];
console.log(detodo.splice(2, 1)); // y si pones (detodo.splice(2, 1, 'πΊ')); no lo borra sino que lo sustituye por una birra.
console.log(detodo);
/*var quitapinya = () => {
    detodo.indexOf(element);
  
    if (element == "π") {
      detodo.splice(element, 1);
      console.log(detodo);
    }
};
quitapinya();
*/
console.log("ejercicio 4");
//4. A partir del siguiente array πππππ convierte todas las fresas en π
var enunciado4 = ["π", "π", "π", "π", "π"];
function creachampi(icono) {
  for (let i = 0; i < enunciado4.length; i++) {
    if (enunciado4[i] === icono) {
      enunciado4[i] = "π";
    }
    console.log(enunciado4);
  }
}
creachampi("π");
console.log("ejercicio 5");
//5. AΓ±ade el siguiente icono π₯΅ inmediatamente despuΓ©s del cada πΆοΈ en el siguiente array: πΆοΈπ₯πΆοΈπ₯πΆοΈπ₯
console.log("soluciΓ³n 1");
let enunciado5 = ["πΆοΈ","π₯","πΆοΈ","π₯","πΆοΈ","π₯"];
function guindi(icono, enunciado, otre) {
    for (let i = 0; i < enunciado.length; i++) {
      otro = otre;
      if (enunciado[i] === icono) {
        enunciado[i] = enunciado[i] + otro;
      }
      ;
    }
  }
guindi("πΆοΈ", enunciado5, ['π₯΅']);
console.log(enunciado5);
console.log("soluciΓ³n 2")
//
let enunciado6 = ["πΆοΈ","π₯","πΆοΈ","π₯","πΆοΈ","π₯"];
enunciado6.splice(1, 0, 'π₯΅');
enunciado6.splice(4, 0, 'π₯΅');
enunciado6.splice(7, 0, 'π₯΅');
console.log(enunciado6);
//6. AΓ±ade una π cartas comodΓ­n entre medio de dos cartas . Por ejemplo:π΄ππ΄ En el siguiente array: π΄π΄π΄ππ΄π΄π΄
let cartas = ["π΄","π΄","π΄","π","π΄","π΄","π΄"];
cartas.splice(3, 1)
cartas.splice(1, 0, 'π');
cartas.splice(4, 0, 'π');
cartas.splice(7, 0, 'π');
console.log(cartas);
// solucion 2
console.log("solucion2");
let cartas2 = ["π΄","π΄","π΄","π","π΄","π΄","π΄"];
let joker = [];
cartas2.forEach((item, position, array) => {
   item === array[position+1]?joker.push(item, "π"):joker.push(item);
});
console.log(joker);
