import { mahasiswa, hitungRataRata, tentukanPredikat } from "./config.mjs";

console.log("DATA NILAI MAHASISWA");

mahasiswa.forEach((item) => {
  const predikat = tentukanPredikat(item.nilai);
  console.log(`${item.nama}, ${item.nilai} dengan Predikat ${predikat}`);
});

const rataRata = hitungRataRata(mahasiswa);
console.log("_____________");
console.log(`Rata-rata nilai: ${rataRata}`);
