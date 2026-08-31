// function biasa
function doubleThree(number) {
  return number * 3 * 2;
}
// Function bisa mereturn function
function doubleFour(number) {
  return function (x) {
    return number * x * 4;
  };
}
// First class citizen = Function yang diperlakukan layaknya sebuah nilai.
const functionBiasa = doubleFour(2);
const functionBiasaLanjutan = functionBiasa(2);

console.info("Function Biasa");
console.log(doubleFour(2));
console.log(functionBiasa(2));

// expression function
const sayZubair = function () {
  return "Hallo Zubair";
};

// coba hoisting
// privilage hoisting hanya milik function biasa
// console.log(sayMaul("Maulana"));

// arrow function
// function diganti dengan =>
// sayMaul adalah identifier
// parameter dan lainnya sama
const sayMaul = (nama) => {
  return "Hallo " + nama;
};

// penulisan lebih singkat
// syaratnya: parameter nya cuma satu
const sayMaulDua = nama => "Hallo " + nama;

// coba panggilan biasa
console.log(sayMaul("Maulana"));
console.log(sayMaulDua("Ghazali"));


// Challange: Buat satu arrow function bernama hitungNilai dengan 3 parameter 
// yaitu (nama, nilaiTugas, nilaiUjian)
// ketentuannya sebagai berikut:
// - Nilai Tugas memiliki bobot 40%
// - Nilai Ujian memiliki bobot 60%
// - Hitung nilai akhir menggunakan operasi aritmatika
// Jika nilai akhir >= 75, "Selamat nama lulus dengan nilai nilaiAkhir"
// jika nilai akhir < 75, "Mohon maaf, nama tidak lolos dengan nilai nilaAkhir"

const hitungNilai = (nama, nilaiTugas, nilaiUjian) => {
    // const nilaiAkhir = operasi penjumlahan dari ketentuan diatas
    // 40% = 0.4
    // 60% = 0.6
    const bobotNilaiTugas = nilaiTugas * 0.4;
    const bobotNilaiUjian = nilaiUjian * 0.6;
    const nilaiAkhir = bobotNilaiTugas + bobotNilaiUjian;

    // if else
    // if (nilaiAkhir >= 75) {
    //     console.log("Selamat " + nama + "Lulus dengan Nilai" + nilaiAkhir);
    //     console.log(`Selamat ${nama} Lulus dengan nilai ${nilaiAkhir}`);
    // } else {
    //     console.log("Mohon Maaf " + nama + "Tidak Lolos, dengan nilai" + nilaiAkhir)
    //     console.log(`Mohon Maaf ${nama} Tidak lolos dengan nilai ${nilaiAkhir}`);
    // }

    //ternary operator
    return nilaiAkhir >= 75
      ? console.log(`Selamat ${nama} Lulus dengan nilai ${nilaiAkhir}`)
      : console.log(
          `Mohon Maaf ${nama} Tidak lolos dengan nilai ${nilaiAkhir}`,
        ); 
}

hitungNilai("Numen", 20, 50);
hitungNilai("Ardi", 80, 80);