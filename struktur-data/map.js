// Map adalah tipe data yang mirip dengan object yaitu menyimpan data dengan key-value. Kalau sama seperti object, lalu apa fungsinya map? Map berfungsi untuk menutupi kekurangan dari object. Map dapat menggunakan key dengan tipe data apa pun, tidak seperti object yang hanya menerima string. Jadi perbedaan mendasarnya terletak pada key yang digunakan.

// Menggunakan Map constructor
const map = new Map([
  [true, "boolean"],
  [30, "tiga puluh"],
  [[0, 1], "array"],
  [{ 0: 1, 1: 1 }, "objek"],
]);

const object = {
  name: "Ahmad",
  kelas: 10,
  10: 10,
};
console.log(map); // Map(0) {}
console.log("\n");
console.log(object);

// menambahkan data di dalam map menggunakan methode .set(key, value)
const data = new Map();
data.set("nama", "Maulana");
data.set(1, true);
console.log(data);

// mengakses nilai yang ada di dalam map menggunakan methode .get(key)
const maul = data.get("nama");
console.log(maul);
console.log(data.get(1));

// menghapus nilai spesifik yang ada di dalam menggunakan methode .delete(key)
data.delete(1);
data.delete("nama");
console.log(data);

// mengecek apakah ada value yang dicari menggunakan .has(key)
data.set(1, "Alghazali");
data.set(2, "Maulana");
data.set(3, "Irsyad");
data.set(4, "Kaysan");
data.set(5, "Athallah");
console.log(data);
console.log(data.has(10));
console.log(data.has("1"));
console.log(data.has(Number("5")));
