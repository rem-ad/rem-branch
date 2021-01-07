//Şimdiki gün ay yıl bilgisini yazdırınız

let d = new Date();

console.log(d);

console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDate());

//tarih ve saat biglsini içeren date objesi olusturunuz

let dObject = new Date('8/24/2010 14:50:10');

console.log(dObject);

// 1/1/1990 tarihinnden bir gün öncesini gösteriniz

var dtc = new Date('1/1/1990');
var dayOfMonth = dtc.getDate();
dtc.setDate(dayOfMonth - 1);

console.log(dtc);

// iki tarih arasında geçen zamanı gösteriniz

var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

var millisecond = end - start;
var second = (millisecond / 1000);
var minute = second / 60;
var hour = minute / 60;
var day = hour / 24;

console.log(millisecond);
console.log(second);
console.log(minute);
console.log(hour);
console.log(day);

// Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zmaan kutlanacaktır?

var annelerGunu = new Date();

annelerGunu.setFullYear(2019);
annelerGunu.setHours(0,0,0,0,0);
annelerGunu.setMonth(4);
annelerGunu.setDate(1);

while (annelerGunu.getDay!=0) {
    
    annelerGunu.setDate(annelerGunu.getDate()+1);
}

annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

// Yaş hesaplama nasıl y?
