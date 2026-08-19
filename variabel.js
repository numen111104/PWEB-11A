//operator tambah (+)
var a = 30;
var b = 15;
var jumlah = a + b;
console.info("Operasi tambah");
console.log(jumlah); // 45

//operator kurang (-)
var kurang = a - b;
console.info("Operasi kurang");
console.log(kurang); // 15

// operator kali (*)
var kali = a * b;
console.info("Operasi Kali")
console.log(kali); // 450

// operator bagi (/)
var bagi = a / b;
console.info("Operasi Bagi")
console.log(bagi); // 2

// operator modulus (%)
var a = 15;
var b = 3;
var modulus = a % b;
console.info("Operasi Modulus")
console.log(modulus); // 0

// operator kurung () -> mendahului operasi aritmatika
var a = 4;
var b = 5;
var c = 6;

var nilai = a + (b - c);
var nilaiAkhir = nilai * 2 + a - 10 + (a + b);
var nilaiAkhir2 = 10 + (2 - 5) * 2; 
var nilaiAkhir3 = 5 % 2 + (3 + 5) * 2 * 4; // 65
console.info("Operasi tanda kurung");
console.log(nilai);
console.log(nilaiAkhir); 
console.log(nilaiAkhir2);
console.log(nilaiAkhir3);

// () -> */ -> +-
