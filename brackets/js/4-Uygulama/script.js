var num = 15.123456789;

// toplamda 3 basamaklı sayı kullan

console.log(num.toPrecision(3));

// ondalık kısmı 3 basamak ile sınırla

console.log(num.toFixed(3));

// en yakın sayıya yuvarla

console.log(Math.round(num));

// aşağı yuvarla

console.log(Math.floor(num));

// yukarı yuvarla

console.log(Math.ceil(num));

// 1,2,10,56,20 syılarındna en buyugunu ve en küçüğünü bul

console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));

// sayı aralığını kullanıcının belirleyeceği random sayı uretin

var min=50;
var max=100;

console.log(Math.round(min+Math.random()*(max-min)));

/* Bir personelin yaptıgı mesaiye göre aldıgı maası hesaplayalım
brut maas= 3700
brut mesai= 10.3

Agustos ayı toplam mesai 42 saat ise toplam brüt maaşı?

brut uzerinden kesinti %25 ise net maas?
*/


var brutMaas=3700;
var brutMesai=10.3;

var toplamMesai=42;
var toplamBrut= brutMaas + (brutMesai*toplamMesai);

console.log(toplamBrut);

var net = toplamBrut - toplamBrut*0.25;

console.log(net.toFixed(2));





