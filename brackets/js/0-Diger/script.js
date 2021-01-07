// alert("merhaba");
// // {/* <div id="medyanet/9927946/hurriyet/lezizz/pageskin_sol_120x600_igr" data-size="[[160, 600], [120, 600], [220, 800], [300, 600]]"></div>
// // <div id="medyanet/9927946/hurriyet/lezizz/sag_120x600_igr" data-size="[[160, 600], [120, 600], [220, 800], [300, 600]]"></div>
// // <div id="medyanet/9927946/hurriyet_mobilsite/lezizz/320x50_igr" data-size="[[320,100], [320, 50]]"></div> */}

// // var adSoyad='RemziSuaydın';

// const adsoyoadsabit='remzi';
// let ad='remzi';

//Pritive Types

//String
//  let firstname='remzi';
//  console.log(firstname);

// console.log(typeof firstname);

//Number
//  let age=20;
//  console.log(typeof age);

// //Boolean
// let isActive=false;


// //null
// let job=null;


// //undefined

// var car;



//Reference Types - Objects

//Arrays

let names = ['ali', 'ahmet', 'can'];

//Object

let address = {
    city: 'kocaeli',
    country: 'turkey'
}


//Function

var calculateAge = function () {
    return 0;
}

// console.log(typeof calculateAge);
// console.log(calculateAge);

//Ders 4: Tür Dönüşümleri

let val;

//number to string

val = String(10);

//bool to string

val = String(true);

//date to string

val = String(new Date());

//array to string

val = String([1, 2, 3, 4]);

// toString()

val = (10).toString();
val = (false).toString();



//String to number

val = Number(10);
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1, 2, 3, 4]);

//parseInt
//parseFloat

val=parseInt(10);
val=parseInt(10.5);
val=parseFloat(10.5);

console.log(typeof val);
console.log(val);
