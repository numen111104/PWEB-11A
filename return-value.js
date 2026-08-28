jumlah(90 + 10);
// RETURN VALUE
function jumlah(a, b) {
    const result = a + b;
    return result;
  // return untuk mengembalikan hasil dari function
}



function sapaAkuBang() {
    console.log("Halo Juga Bang"); // tidak pernah di ekseksui
    return "Halo Bang"; // return sudah dieksekusi sehingga kode dibawahnya tidak akan pernah dieksekusi
}

function luasPersegi(sisi) {
    const result = sisi * sisi;
    return result;
}

function sapaByZona(waktu) {
    let result = "";
    if (waktu === "Pagi") {
         result = "Selamat Pagi";
    } else if (waktu === "Siang") {
         result = "Selamat Siang";
    } else if (waktu === "Sore") {
         result = "Selamat Sore";
    } else if (waktu === "Malam") {
         result = "Selamat Malam";
    } else {
         result = "Waktu tidak valid";
    }

    return result;
}

function sapaByZonaRingkas(waktu) {
    return "Selamat " + waktu;
    // return `Selamat ${waktu}`; cara lain menggabungkan string
}
console.info("ZONA DENGAN KONDISI");
console.log(sapaByZona("Malam")); // Selamat Malam
console.log(sapaByZona("Tengah Malam")); // Waktu Tidak Valid

console.info("ZONA TANPA KONDISI");
console.log(sapaByZonaRingkas("Malam")); // Selamat Malam
console.log(sapaByZonaRingkas("Tengah Malam")); // Selamat Tengah Malam

const isTwoFunctionSame = sapaByZona("Malam") === sapaByZonaRingkas("Malam"); //
const isSentenceSame = "Selamat Malam" === "Selamat Malam";
console.info("APAKAH KEDUA FUNGSI SAMA?")
console.log(isTwoFunctionSame);
console.log(sapaByZona("Tengah Malam") === sapaByZonaRingkas("Tengah Malam")); // Waktu Tidak Valid === Selamat Tengah Malam = false
console.log(isSentenceSame);

console.log("2 + 8: ", jumlah(2, 8));
console.log(luasPersegi(19))
