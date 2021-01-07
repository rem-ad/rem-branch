var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business.  ";

var url="https://www.sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// cümle kaç karakterlidir?

console.log(sentence.length);

// kaç kelimeden oluşuyor?

console.log(sentence.trim().split(' ').length);

// tüm cümleyi küçük harfe çevirin

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// cümlenin basındaki ce sonundaki boşlukları siliniz.

console.log(sentence.trim());

// '-' karakterini silin

console.log(sentence.replace('-',''));

// url'nin içinden str kısmını çıkarınız

var str = 'https://';

console.log(url.substr(str.length));

// url hangi protokolü kullanmaktadır? (http,https)

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url .com ifadesini içeriyor mu?

console.log(url.includes('.com'));
console.log(url.indexOf('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log(url.toLowerCase()
                .replace(/ /g,'-')
                .replace(/ı/g,'i')
                .replace(/ö/g,'o')
                .replace(/ğ/g,'g')
                .replace(/ü/g,'u')
                .replace(/ç/g,'c')
);