// keranjang.js — "otak" nota belanja. Tidak ada kode DOM di sini.
//
// MATERI: Map (struktur-data/map.js dan struktur-data/real-case-map.js)
//   - key   = OBJECT produk (Map boleh memakai key bertipe apa saja, bukan hanya string)
//   - value = jumlah (kg) yang dibeli
// MATERI: default export + named export (modularisasi/export.js)
// MATERI: increment / decrement, perbandingan, return boolean

const keranjang = new Map();

// Default export: dipakai main.js sebagai  import keranjang, { ... } from "./keranjang.js"
export default keranjang;

// Menambah 1 kg. Mengembalikan true jika berhasil, false jika sudah mentok di stok.
export const tambahItem = (item) => {
  const jumlahSekarang = keranjang.has(item) ? keranjang.get(item) : 0;

  if (jumlahSekarang >= item.stok) {
    return false;
  }

  keranjang.set(item, jumlahSekarang + 1);
  return true;
};

// Mengurangi 1 kg. Jika tinggal 1 kg, item dibuang dari nota.
export const kurangiItem = (item) => {
  const jumlahSekarang = keranjang.get(item);

  if (jumlahSekarang > 1) {
    keranjang.set(item, jumlahSekarang - 1);
  } else {
    keranjang.delete(item);
  }
};

export const hapusItem = (item) => keranjang.delete(item);

export const kosongkanKeranjang = () => keranjang.clear();

// PERHATIAN: Map.forEach memberi (value, key), URUTANNYA BEDA dengan Array.forEach (item, index).
export const hitungSubtotal = () => {
  let subtotal = 0;
  keranjang.forEach((jumlah, item) => {
    subtotal += item.price * jumlah;
  });
  return subtotal;
};

export const hitungJumlahItem = () => {
  let jumlahSemua = 0;
  keranjang.forEach((jumlah) => {
    jumlahSemua += jumlah;
  });
  return jumlahSemua;
};
