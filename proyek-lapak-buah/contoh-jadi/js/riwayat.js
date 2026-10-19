// riwayat.js — [BONUS] catatan pesanan yang sudah dibayar. Tidak ada kode DOM di sini.
//
// MATERI: array method — push, shift, pop (struktur-data/manipulasi-array.js)
// MATERI: Array.from + reverse (struktur-data/array.js dan array-method.js)

import { MAKS_RIWAYAT } from "./helper.js";

const riwayat = [];

export default riwayat;

// push menambah di belakang. Kalau sudah lebih dari MAKS_RIWAYAT, shift membuang yang paling lama (depan).
export const catatPesanan = (pesanan) => {
  riwayat.push(pesanan);

  if (riwayat.length > MAKS_RIWAYAT) {
    riwayat.shift();
  }
};

// pop membuang pesanan paling baru (belakang) dan mengembalikannya.
// Kalau riwayat kosong, pop mengembalikan undefined.
export const batalkanPesananTerakhir = () => riwayat.pop();

// reverse() MENGUBAH array aslinya. Karena itu salin dulu dengan Array.from.
export const ambilRiwayatTerbaruDulu = () => Array.from(riwayat).reverse();
