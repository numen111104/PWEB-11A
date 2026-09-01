// Object adalah kumpulan pasangan key value dan bukan merupakan tipe data
// yang bukan primitif. Object dapat menyimpan berbagai tipe data, termasuk
// tipe data primitif dan tipe data non-primitif.

// tipe data primitif adalah tipe data yang memiliki nilai tunggal
// dan tidak dapat diubah setelah dibuat.
// Contoh tipe data primitif adalah string, number, boolean, null, undefined, dan symbol.

// Contoh object literal => {}
const objectLiteral = {}; // di dalam tanda kurung disebut dengan property,
// property terdiri dari key dan value
const products = {
  name: "Laptop", // name adalah key dan laptop adalah value
  price: 4500000, // price adalah key dan 4500000 adalah value
  category: "Electronics", // category adalah key dan Electronics adalah value
  stok: 10, // stok adalah key dan 10 adalah value
  isAvailable: true, // isAvailable adalah key dan true adalah value
};

// cara mengakses value property pada object
// 1. Menggunakan dot notation (.)
console.info("Mengakses property pada object menggunakan dot notation");
console.log(products.name);
console.log(products.isAvailable);
console.log(products.price);

// Kekurangan dari dot notation adalah nama key yang ingin diakses harus valid; 
// tidak boleh mengandung spasi; 
// tidak boleh diawali angka; 
// dan tidak boleh mengandung spesial karakter.


// 2. Menggunakan Square Bracket
console.info("Mengakses property pada object menggunakan Square Bracket");
const isProdukAvailable = products['isAvailable']; // menyimpan property di dalam variabel lain
const namaProduk = products['name'];
console.log(isProdukAvailable);


// 3. Menggunakan Object Destructuring
const kelas = {
    "totalMeja": 21,
    totalSiswa: 20,
    isClean: false
};

// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari properti object 
// ke dalam satuan yang lebih kecil (variabel)
const { isClean, totalSiswa } = kelas;
console.info("Mengakses Propert pada object menggunakan object destructuring");
console.log(isClean);
console.log(totalSiswa);

// Destructuring object yang key-nya tidak ada akan mengembalikan nilai undefined. 
// Oleh karena itu, kita bisa memanfaatkan default value ketika destructuring object 
// seperti berikut ini agar nilainya tidak undefined.
const { isTvMerdeka } = kelas; // hasil undefined karena tidak ada key nya di object kelas.
console.log(isTvMerdeka);

const { totalSiswaHasLaptop = 18 } = kelas; // kita kasih default value pada key yang tidak ada di dalam properti objek
console.log(totalSiswaHasLaptop); // hasil 18 

/// contoh lain
const user = {
  id: 24,
  email: 'aras@dicoding.com',
  name: 'Arsy',
  nickname: 'Aras',
  username: 'aras123',
  password: 'secret',
};
// sangat memudahkan untuk mengambil beberapa properti dari object sekaligus, 
// tanpa harus menulisnya satu per satu.
const { name, password } = user; 


// Mengubah value property pada object
const accounts = {
    username: 'dicoding',
    password: 'secret',
    isActive: true,
    isBanned: false
}

accounts.isBanned = true; // mengubah value property isBanned menjadi true
console.info("Mengubah value property pada object");
console.log(accounts.isBanned); // true
