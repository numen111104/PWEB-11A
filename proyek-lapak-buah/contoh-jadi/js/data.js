// data.js — "gudang" data lapak.
// File ini hanya berisi DATA. Tidak ada kode DOM dan tidak ada hitung-hitungan.
//
// MATERI: array of object (struktur-data/array.js dan struktur-data/object.js)
// MATERI: named export (modularisasi/export.js dan modularisasi/main.mjs)
//
// Nama key sengaja sama dengan contoh `products` di struktur-data/object.js:
//   name, price, category, stok
// Harga adalah harga per kilogram (kg).

export const produk = [
  {
    id: 1,
    name: "Apel",
    price: 32000,
    category: "Impor",
    stok: 12,
    gambar: "assets/img/apel-merah.svg",
    gambarAlt: "assets/img/apel-hijau.svg", // gambar kedua, dipakai tombol "Ganti warna"
    warna: "#ffe1de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 2,
    name: "Pisang Ambon",
    price: 18000,
    category: "Lokal",
    stok: 20,
    gambar: "assets/img/pisang.svg",
    warna: "#fff1b8",
  },
  {
    id: 3,
    name: "Mangga Harum Manis",
    price: 25000,
    category: "Lokal",
    stok: 4, // stok sedikit: kartu akan menampilkan "Tinggal 4 kg"
    gambar: "assets/img/mangga.svg",
    warna: "#ffe7bd",
  },
  {
    id: 4,
    name: "Nanas Madu",
    price: 15000,
    category: "Lokal",
    stok: 0, // stok kosong: kartu menampilkan "Habis" dan tombol nonaktif
    gambar: "assets/img/nanas.svg",
    warna: "#f4f0c4",
  },
  {
    id: 5,
    name: "Jeruk Medan",
    price: 22000,
    category: "Lokal",
    stok: 15,
    gambar: "assets/img/jeruk.svg",
    warna: "#ffddc2",
  },
  {
    id: 6,
    name: "Anggur Ungu",
    price: 60000,
    category: "Impor",
    stok: 6,
    gambar: "assets/img/anggur.svg",
    warna: "#e9ddff",
  },
];
