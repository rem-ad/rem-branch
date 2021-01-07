var trafigeCikis = new Date('04/20/2017');
var ulasilanSure = Date.now() - trafigeCikis.getTime();

var ulasilanGun = Math.floor(ulasilanSure / (1000 * 60 * 60 * 24));

/* if (ulasilanGun >= 365 && ulasilanGun < 365 * 2) {

    console.log("1. bakım zamanı geldi")

} else if (ulasilanGun >= 365 * 2 && ulasilanGun < 365 * 3) {

    console.log("2. bakım zamanı geldi")

} else if (ulasilanGun >= 365 * 3 && ulasilanGun < 365 * 4) {

    console.log("3. bakım zamanı geldi")
} else {

    console.log("bilinmeyen süre")
} */

// console.log(ulasilanGun);

var result = prompt("who's there?");

if (result == 'admin') {
    var password = prompt("password?");
    if (password == '123456') {
        console.log("welcome admin");
    } else {
        console.log("wrong password");
    }

} else if (result == 'cancel') {
    console.log("canceled")
} else {
    console.log("I don't know you")
}
