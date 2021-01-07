//Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz

//adı
//soyadı
//tc kimlik
//sipariş toplamı
//cinsiyet
//adres bilgileri
//hobileri

var customerName='remzi';
var customerLastName='suaydın';

var fullName='remzi suaydın';
var tckimlik='38536082016';

var total=206.8;
var gender=true; // erkek true, kadın false

var address= {
    city: 'İstanbul',
    district: 'Bahçelievler',
    body: 'Neyire Neyir sok. no:11'
}

var hobbies= ['sinema','kitap','spor'];

//aşağıdaki siparişlerin toplamını hesaplayınız

var order1='100';
var order2='150';

var totalOrder= Number(order1) + Number(order2);
console.log(totalOrder);

//aşağıdaki siparişlerin toplamını hesaplayınız

var order3='100.2';
var order4='150.5';

var totalOrder2 = Number(order3) + Number(order4);
console.log(totalOrder2);

//aşağıdaki siparişlerin toplamını tam sayı olarak hesaplayınız

var order4='150.5';
var order5='330.1';

var totalOrder3 = parseInt(order4) + parseInt(order5);
console.log(totalOrder3);

//aşağıda verilen doğum yılına göre yaş hesaplayın

var yearOfBirth=1989;
console.log(new Date().getFullYear()-yearOfBirth);

//aşağıdaki string ifadenin karakter uzunlugunu hesaplayın

var course='Modern Javascript Kursu';
console.log(course.length);




