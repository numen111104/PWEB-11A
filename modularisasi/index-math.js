import math from "./math.js";

// menggunakan dot notation (.)
console.log(math().tambah(5, 10));
// menggunakan square bracket ([])
console.log(math()["kurang"](10, 5));

// menggunakan object destructuring assignment
const { bagi, kali } = math();

console.log(bagi(10, 5));
console.log(kali(5, 10));

const { kurang } = math();
console.log(kurang(10, 5));
