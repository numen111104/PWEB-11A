// Cara mendeklarasikan array ada 3 cara di javascript, yaitu:

// 1. Menggunakan object constructor Array()
const arrayConstructor = new Array(1, 2, 3, 4);
const arrayKosong = new Array();
console.log(arrayConstructor); // [1,2,3,4]
console.log(arrayKosong); // []

// 2. Menggunakan Array.from()
const splitBuah = Array.from("PISANG"); // Membuat array baru
const splitNama = Array.from("GAZALI");
console.log(splitBuah);
console.log(splitNama);

// case andaikan ingin membuat array baru dengan value yang sama
const arrayLama = new Array("Satu", "Dua", "Tiga", "Empat");
const arrayBaru = Array.from(arrayLama);
const isArrayLamaIdentikArrayBaru = arrayLama === arrayBaru;

console.log(isArrayLamaIdentikArrayBaru ? "Ya sama bro" : "Sorry bro beda");
console.log(arrayLama);
console.log(arrayBaru);

// 3. Menggunakan array literal []
const arrayLiteral = [
  "Ayam", //string
  "bebek", // strinf
  10, // number
  true, // boolean
  { ayam: "hidup", cicak: "mati" }, // object
  ["cicak", "bebek"], // array
]; // per elemen bisa berbeda tipe datanya
// untuk mengaksesnya kita bisa gunakan [] dengan nomor indeksnya
// indeks dimulai dari 0
const objectArrayLiteral = arrayLiteral[4];
const { ayam } = objectArrayLiteral; // mengakses object yang ada di dalam arrayLiteral dengan destructuring object
console.log(objectArrayLiteral);
console.log(ayam); //hidup
console.log(ayam === "hidup" ? "YES BENER BRO" : "SALAH LOH YA");

const arrayArrayLiteral = arrayLiteral[5]; // mengakses array yang ada di dalam arrayLiteral 
console.log(arrayArrayLiteral[0]); // cicak 
console.log(arrayArrayLiteral[1]); // bebek

const booleanArrayLiteral = arrayLiteral[3];
console.log(booleanArrayLiteral);

const stringArrayLiteral = arrayLiteral[0];
console.log(stringArrayLiteral);

console.log(arrayLiteral); // value ayam masih hidup
arrayLiteral[4].ayam = "mati"; // ubah jadi mati
console.log(arrayLiteral); // sudah berubah menjadi mati

arrayLiteral[4]['cicak'] = "hidup";
console.log(arrayLiteral);

// const {arrayLiteral[4]}
// apakah bisa destructuring bisa mengubah value properti objek di dalam array?