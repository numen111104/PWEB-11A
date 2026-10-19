// helper.js — kumpulan FUNGSI hitung-hitungan dan pemformatan.
// Semua fungsi di sini "murni": menerima input, mengembalikan hasil (return),
// tidak menyentuh DOM. Karena itu bisa diuji lewat terminal: node uji-logika.mjs
//
// MATERI: function declaration, function expression, arrow function,
//         parameter default, return value, first-class function,
//         operator aritmetika / perbandingan / ternary, Map

// ---------- Aturan toko (konstanta) ----------
// Konstanta ditulis UPPER_SNAKE_CASE supaya mudah dikenali dan tidak diubah-ubah.
export const BATAS_DISKON_SEDANG = 75000; // belanja >= Rp75.000 -> diskon 5%
export const BATAS_DISKON_TINGGI = 150000; // belanja >= Rp150.000 -> diskon 10%
export const MAKS_RIWAYAT = 5; // riwayat pesanan yang disimpan

// ---------- 1. Function declaration (kena hoisting) ----------
// Mirip sapaByZona() di return-value.js.
export function sapaByWaktu(jam) {
  if (jam < 11) {
    return "Selamat pagi";
  } else if (jam < 15) {
    return "Selamat siang";
  } else if (jam < 18) {
    return "Selamat sore";
  }
  return "Selamat malam";
}

// ---------- 2. Function expression + parameter default ----------
// Mirip convertCelciusToFahrenheit di function-experession.js.
// Jika dipanggil tanpa argumen, angka otomatis bernilai 0.
// Operator + di sini berfungsi sebagai operator STRING ("Rp" digabung teks angka).
export const formatRupiah = function (angka = 0) {
  return "Rp" + angka.toLocaleString("id-ID");
};

// Potongan harga ditampilkan dengan tanda minus, kecuali nilainya 0.
export const formatPotongan = (angka) => (angka > 0 ? "-" + formatRupiah(angka) : formatRupiah(0));

// ---------- 3. Arrow function + ternary bersusun ----------
// Mirip penentuan bonus di challange.js (>= 5jt -> 10%, >= 3jt -> 5%, selain itu 0).
export const hitungPersenDiskon = (subtotal) =>
  subtotal >= BATAS_DISKON_TINGGI ? 10 : subtotal >= BATAS_DISKON_SEDANG ? 5 : 0;

export const hitungDiskon = (subtotal) => (subtotal * hitungPersenDiskon(subtotal)) / 100;

// ---------- 4. Function yang mengembalikan function (closure) ----------
// Sama polanya dengan multiplier() di first-class-citizen.js:
//   const double = multiplier(2);   ->   const kupon10 = buatKupon(10);
// buatKupon(10) mengembalikan function baru yang "mengingat" angka persen-nya.
export const buatKupon = (persen) => (subtotal) => (subtotal * persen) / 100;

// ---------- 5. Map yang berisi function ----------
// Key = kode kupon (string), value = function penghitung potongan.
// Ini gabungan materi Map (struktur-data/map.js) dan function di dalam struktur data
// (struktur-data/array-object-function.js).
export const daftarKupon = new Map([
  ["HEMAT5", buatKupon(5)],
  ["HEMAT10", buatKupon(10)],
  ["KELAS11A", buatKupon(15)],
]);

// ---------- 6. Ringkasan pembayaran ----------
// Parameter kedua adalah FUNCTION. Default-nya function yang selalu mengembalikan 0
// (artinya: tidak ada kupon). Function bisa jadi nilai default, karena function adalah nilai.
// Hasilnya berupa object, jadi pemanggil bisa memakai object destructuring.
export const hitungRingkasan = (subtotal, fungsiKupon = () => 0) => {
  const persenDiskon = hitungPersenDiskon(subtotal);
  const diskon = hitungDiskon(subtotal);
  const potonganKupon = fungsiKupon(subtotal);

  // Pembulatan ke bawah kelipatan Rp100 memakai operator modulus (%).
  // Contoh: 73.150 % 100 = 50, jadi total menjadi 73.100.
  const sebelumPembulatan = subtotal - diskon - potonganKupon;
  const pembulatan = sebelumPembulatan % 100;
  const total = sebelumPembulatan - pembulatan;

  return { subtotal, persenDiskon, diskon, potonganKupon, pembulatan, total };
};

// ---------- 7. Jam sekarang untuk riwayat pesanan ----------
export const jamSekarang = () =>
  new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
