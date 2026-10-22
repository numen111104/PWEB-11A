const produk = [
  {
    id: 1,
    name: "Apel",
    price: 32000,
    category: "Impor",
    stok: 12,
    gambar: "assets/img/apel-merah.svg",
    gambarAlt: "assets/img/apel-hijau.svg", // OPSIONAL: gambar kedua untuk tombol "Ganti warna"
    warna: "#ffe1de", // warna latar foto, dibaca CSS lewat variabel --warna
  },
  {
    id: 2,
    name: "Anggur",
    price: 40000,
    category: "Lokal",
    stok: 5,
    gambar: "assets/img/anggur.svg",
    gambarAlt: "assets/img/anggur.svg",
    warna: "#ab74de",
  },
];

const keranjang = new Map(); // 0

const tambahKeranjang = (item) => {
  const jumlahKeranjangSaatIni = keranjang.has(item) ? keranjang.get(item) : 0;

  if (jumlahKeranjangSaatIni >= item.stok) return false;
  console.log(jumlahKeranjangSaatIni);
  keranjang.set(item, jumlahKeranjangSaatIni + 1);
  return true;
};

console.log(keranjang); // kondisi awal keranjang
// Map(0) {}
console.log(tambahKeranjang(produk[1])); // 1 produk anggur dimasukkan ke keranjang
console.log(keranjang);
// Map(1) {
//   {
//     id: 2,
//     name: 'Anggur',
//     price: 40000,
//     category: 'Lokal',
//     stok: 5,
//     gambar: 'assets/img/anggur.svg',
//     gambarAlt: 'assets/img/anggur.svg',
//     warna: '#ab74de'
//   } => 1
// }
console.log(tambahKeranjang(produk[1])); // 1 produk anggur dimasukkan ke keranjang
console.log(keranjang);
console.log(tambahKeranjang(produk[0]));
console.log(keranjang);
console.log(tambahKeranjang(produk[0]));
console.log(keranjang);

const kurangiItem = (item) => {
  const jumlahKeranjang = keranjang.get(item);
  if (jumlahKeranjang > 1) {
    keranjang.set(item, jumlahKeranjang - 1);
  } else {
    keranjang.delete(item);
  }
};

console.log(kurangiItem(produk[1]));
console.log(keranjang);
console.log(kurangiItem(produk[1]));
console.log(keranjang);
