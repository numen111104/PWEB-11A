// Konversi Eksplisit -> konversi paling termudah untuk developer

//1. konversi ke string
let angka = 100;
let isFauzanMarried = false;
let floatNumber = 3.14;

// String(param); param->variabel atau ekspresi yang ingin dikonversi ke string
const angkaToString = String(angka);
const isFauzanMarriedToString = String(isFauzanMarried);
const floatNumberToString = String(floatNumber);

// .toString(); tanpa param, deklarasi setelah variabel atau ekspresi
const angkaToString2 = angka.toString();
const isFauzanMarriedToString2 = isFauzanMarried.toString();
const floatNumberToString2 = floatNumber.toString();

console.info("Konversi ke String: menggunakan String(param)");
console.log(angkaToString); // "100"
console.log(isFauzanMarriedToString);
console.log(floatNumberToString);

console.info("Konversi ke string: menggunakan .toString()");
console.log(angkaToString2);
console.log(isFauzanMarriedToString);
console.log(floatNumberToString);

// 2. Konversi ke Number
let strNumber = "890";
let floatNumber2 = "3.14";
let isFulanAbsent = true;

// Number(param): param -> variabel atau eskpresi yang ingin dikonversi
const numFromString = Number(strNumber);
const floatFromString = Number(floatNumber2);
const numFromBoolean = Number(isFulanAbsent);

// parseInt(param):
let pixel = "500px";
let height = "178cm"
let weight = "84kg";

const pixelToInt = parseInt(pixel);
const heighToInt = parseInt(height);
const weightToInt = parseInt(weight);

// parseFloat(param)
let phi = "3.14Phi"
let tegangan = "20.5Volt"

const phiToNumber = parseFloat(phi);
const teganganToNumber = parseFloat(tegangan);

console.info("Konversi ke number menggunakan Number(param)");
console.log(numFromString);
console.log(floatFromString);
console.log(numFromBoolean);

console.info("Konversi ke number (integer) menggunakan parseInt()")
console.log(pixelToInt);
console.log(heighToInt);
console.log(weightToInt);

console.info("Konvesi ke number (float) menggunakan parseFloat(param)")
console.log(phiToNumber);
console.log(teganganToNumber);

// 3. Konversi ke boolean
let number = 123;
let string = "string";
let empty = null;
let kosong = "";
let notANumber = NaN;

console.info("Konversi ke boolean menggunakan Boolean(param)")
console.log(Boolean(number)); // contoh variabel
console.log(Boolean(4+4)); // contoh ekspresi
console.log(Boolean(string));
console.log(Boolean(empty));
console.log(Boolean(kosong));
console.log(Boolean(notANumber));


