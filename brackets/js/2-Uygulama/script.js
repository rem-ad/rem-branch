//Demo: Operators

//1- can ve ada'nın boy ve kilo bilgileribi alın
//2- Alınan bilgilere göre kilo indekslerini hesaplayın
//**Formül: Kişinin kilosu / boy uzunluğunun karesi
//3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız
//4- Aşağıdaki tabloya göre can ve ada hangi gruba giriyor

/*  
    0-18,4 = zayıf
    18,5 - 24,9 = normal
    25,0 - 29,0 = kilolu
    30,0 - 34,9 = Şişman
*/

var indeksCan;
var indeksAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.70;
const heightAda = 1.50;

indeksCan = (kgCan) / (heightCan*heightCan);
indeksAda = (kgAda) / ((heightAda)*(heightAda));



console.log(indeksCan.toFixed(2),indeksAda.toFixed(2));


let higherAda = indeksAda > indeksCan;
let higerCan = indeksCan > indeksAda;

console.log("Ada'nın kilo indeksi daha büyük mü?"+higherAda);
console.log("Can'ın kilo indeksi daha büyük mu?"+higerCan);

let adaZayif = (indeksAda>=0) && (indeksAda<=18.4);
let adaNormal = (indeksAda>=18.5) && (indeksAda<=24.9);
let adaKilolu = (indeksAda>=25) && (indeksAda<=29);
let adaSisman = (indeksAda>=30) && (indeksAda<=34.9);


console.log("Ada zayıf mı?"+adaZayif);
console.log("Ada normal mi?"+adaNormal);
console.log("Ada kilolu mu?"+adaKilolu);
console.log("Ada şişman mı?"+adaSisman);


















