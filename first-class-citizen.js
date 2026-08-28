// first class citizen => function yang dapat ditulis layaknya variabel
// first class citizen => function bisa diletakkan di dalam parameter
// first class citizen => function dapat mereturn function
const umurMultiply = function (umur) {
  return umur * 2;
}; // function expresssion

function multiply(numA, numB) {
  return numA * numB;
}

// Contoh function mengembalikan function
function calculateMultiply(numA, numB) {
  return multiply(numA, numB);
}

// Contoh function biasa
function sapa() {
  return "Hello World ";
}

// Contoh function dijadikan parameter
function sapaGhazali(fungsi, nama) {
  return fungsi() + nama;
}

console.log(sapaGhazali(sapa, "Ghazali"));

const hasilPerkalian = calculateMultiply(multiply, 2, 3); // 6

function calculate(operation, num) {
  return operation(num) / 2; // return adalah eksekusi sebuah fungsi
}

const result = calculate(umurMultiply, 3); // 3 * 2 = 6 / 2 = 3
console.log(result);

// console.log(calculate(umurMultiply(21), 2));
// console.log(calculate(multiply(2, 2), 3));

function multiplier(x) {
  return function (num) {
    return x * num;
  };
}

const double = multiplier(2); // buat expression function dulu lalu isi argumen pertama
const triple = multiplier(3);
const resultDouble = double(10); // simpan di variabel untuk isi param ke dua
const resultTriple = triple(10);

// PR, cari tahu: apakah bisa function yang mereturn function dengan param 
// yang berbeda ditulis di dalam satu function expression atau variabel

console.log(resultDouble); // 20
console.log(resultTriple); // 30
