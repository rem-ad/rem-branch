const fullname = 'Remzi Suaydın';
const city = 'istanbul';
const yearOfBirth = '1989';

let val;

val = 'my name is '+fullname+' I\'m '+(2020-yearOfBirth)+' years old and I live in '+city+'';

// ternary operator
val = `my name is ${fullname} I'm ${2020-yearOfBirth>=18?'over 18':'under 18'} and I live in ${city}`;

console.log(val);