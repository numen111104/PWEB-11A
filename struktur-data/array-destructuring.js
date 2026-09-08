// Array Destructuring => Untuk melihat isi dari array

const arrayDestruc = new Array(
  "Satu",
  "Dua",
  "Tiga",
  false,
  true,
  10,
  {
    nama: "Maulana",
    kelas: 11,
    gender: "Pria",
    isActive: true,
  },
  ["Botol", "Spidol", "Papan Tulis"],
);

console.log(arrayDestruc);

// BAGAIAMANA?? => menggunakan kurung siku yang di dalamnya adalah nama variabel yang kita assign
const indexPertama = arrayDestruc[0];
const [satu, dua, tiga, isAvailable, isDead, number, dataSiswa, dataKelas] =
  arrayDestruc;

// contoh akses variabel objek dataKelas menggunakan destructuring
const { nama, gender } = dataSiswa;

console.log(indexPertama);
console.log(dataKelas);
console.log(nama);

// Destructuring array hanya dapat dilakukan jika array tersebut
// tidak bernilai null atau undefined.
// Ketika melakukan destructuring pada array yang bernilai null atau undefined
// akan menyebabkan error. // SALAH
const arrayNull = [1, 2];

const [error, error1, error3] = arrayNull;
console.log(error3); // undefined bukan error
// statement diawal tidak benar
