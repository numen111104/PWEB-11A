// apakah bisa function disimpan di dalam elemen array?
// CONTOH FUNCTION DI DALAM ARRAY
const arrayFunct = [
  (nama) => "Hello " + nama,
  () => "Function kedua",
  function halo() {
    return "HALO LAGI";
  },
];

// array destructuring
const [functSatu, functDua] = arrayFunct;

console.log(functSatu("Ardhi"), functDua());

const a = 20;
let b = a * 20;
const c = 20;

const arrayBiasa = new Array("Maulana", "Irsyad", "Zubair", "Ardhi", (name) => {
  return "Hello " + name;
});

const functionsArray = new Array(
  function doubleThree(number) {
    return number * 3;
  },
  (number) => {
    return number * 4;
  },
  (number) => number * 5,
  "FUNCTION KEEMPAT",
  true,
);

// kita simpan function dengan nama baru menggunakan array destructuring
const [doubleThree, doubleFour, doubleFive, string, boolean] = functionsArray;

console.log(doubleFour(6), doubleFive(2), boolean, string, doubleFour(4));

const kelas11A = [
  "Fadhieel",
  "Rayyaan",
  function absen(nama) {
    return "Hallo " + nama;
  },
  (tivi = (dimana) => {
    return "TV ada di" + dimana;
  }),
  (keadaan) => "Keadaan saat ini adalah" + keadaan,
];

console.log(kelas11A[2](kelas11A[0]));
