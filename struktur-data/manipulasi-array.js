// MANIPULASI ARRAY DI DALAM JAVASCRIPT

// Menggunakan indexing
let array = ["satu", 2, "tiga", 4, "lima", false];
console.log(array); // sebelum diubah
array[1] = "dua"; // manipulasi menggunakan index nya
array[3] = "empat";
array[5] = "enam";
console.log(array); // setelah diubah

// Menggunakan push => Menambahkan nilai ke array pada elemen terakhir
const arrayPush = new Array("1", "Dua", "3", "Empat");
arrayPush.push("5", "enam"); // parameter nya bisa diisi dengan berbagai value/nilai
console.log(arrayPush);

// Menghapus Element dan Data di dalam Array
// Menggunakan keyword delete, kekurangannya hanya menghapus datanya saja, tidak menghaous elementnya
const arrayDelete = new Array("Irsyad", "Ghazali", "Dimas", "Rizky");
delete arrayDelete[3];
console.log(arrayDelete);

// Menggunakan splice,
// param pertama => start indeks array pertama
// param kedua => jumlah elemen yang mau dihapus
const arraySplice = ["Apel", "Mangga", "Nanas", "Pisang"];
arraySplice.splice(2, 2); // Apel,mangga
arraySplice.splice(0, 2); //
console.log(arraySplice);

// Menggunakan pop => menghapus elemen terakhir
const arrayPop = ["Satu", "Dua", "Tiga", "Empat"];
arrayPop.pop();
console.log(arrayPop);

// Menggunakan shift => menghapus elemen pertama
const arrayShift = ["Satu", "Dua", "Tiga", "Empat"];
arrayShift.shift();
console.log(arrayShift);

// apakah bisa function disimpan di dalam elemen array?

const arrayFunct = [
  (nama) => "Hello " + nama,
  () => "Function kedua",
  function halo() {
    return "HALO LAGI";
  },
];

const [functSatu, functDua] = arrayFunct;

console.log(functSatu("Ardhi"), functDua());
