//Dizi Uygulaması

/* bmw mercedes opel mazda elemanlarına sahip bir dizi olusturun */

var cars = ['bmw', 'mercedes', 'opel', 'mazda'];

/* dizi kaç elemanlıdır? */

console.log(cars.length);

// dizinin ilk ve son elemanı nedir?

let first = cars[0];
console.log(first);
let last = cars[cars.length - 1];
console.log(last);

// Renault değerini dizinin sonuna ekleyin

// cars.push("renault");

cars[cars.length] = "renault";
cars[cars.length] = "fiat";
console.log(cars);

// Toyota değerini dizinin başına ekleyin

cars.unshift("toyota");
cars.unshift("seat");

console.log(cars);

// Seat değerini siliniz

cars.shift("seat");
console.log(cars);

// Fiat değerini siliniz

cars.pop('fiat');
console.log(cars);

// Dizi elemanlarını ters çevirin

cars.reverse();
console.log(cars);

// Dizi elemanlarını alfabetik olarak sıralayın

cars.sort();
console.log(cars);

// [1,2,5,80,15] dizisini sıralayın

var numbers = [1, 2, 5, 80, 15];

function compare(a, b) {

    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

numbers.sort(compare);

console.log(numbers);

// Opel değeri dizinin bir elemanı mıdır?

console.log(cars.includes("opel"));
console.log(cars.indexOf("opel"));

// var str="Chevrolet,Dacia"; ifadesini diziye çeviriniz

var str = "Chevrolet,Dacia";
var cars2 = str.split(',');

console.log(cars2);

// Oluşturulan 2 dizinin elemanlarını bir başka dizide birleştirin

var cars3 = cars.concat(cars2);

console.log(cars3);

// Oluşturulan diziden son 2 elemanı siliniz

/* cars3.pop();
console.log(cars3);
cars3.pop();
console.log(cars3);
 */

console.log(cars3.splice(6, 2));
console.log(cars3);


/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız

    studentA: Yiğit Bilgi 2010
    studentB: Sena Turan 1999
    studentC: Ahmet Turan 1998

 */

var studentA = ['Yiğit', 'Bilgi', 2010];
var studentB = ['Sena', 'Turan', 1999];
var studentC = ['Ahmet', 'Turan', 1998];

var students = [studentA, studentB, studentC];
console.log(students);

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);