// Identifier = nama fungsi
// Sepakat pakai camel case disetiap function yang dibuat
// () parenthess => menyimpan parameter/arguments
// {} curly braces => isi dari fungsi yang akan berjalan
// return untuk mengembalikan atau memberikan output dari fungsi nya
function greetWorld() {
  console.log("Hello World");
}

function convertCelciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  return console.log(
    "Hasil Konversi Celcius Ke Fahrenheit adalah: " + temperatureInFahrenheit,
  );
}

// convertCelciusToFahrenheit(20); // contoh menggunakan ekspresi langsung = 68
// convertCelciusToFahrenheit(10); // -- hasilnya 50

const temperatureInCelcius = 50;
// convertCelciusToFahrenheit(temperatureInCelcius); // contoh menggunakan variabel di parameter = 122

// console.log(convertCelciusToFahrenheit);

// Salah satu kelebihan javascript => Hoisting yakni memungkinkan kita menulis kode pemanggilan sebelum kode pendeklarasian function

// doubleTwo(4); // 8
// fullName("Ahmad", "Irsyad");
// doubleTwo(); //
// fullName(); // undefined undefined
kaliTiga();
kaliTiga(3);

function doubleTwo(number = 2) {
  console.log(number * 2);
}

// contoh tidak pakai default parameter, bingung untuk menentukan hasil dari parameter yang kosong
function kaliTiga(number) {
  if (number != NaN || number != undefined) {
    console.log(number * 3);
  } else {
    console.log("Not A Number");
  }
}

function fullName(namaPertama, namaKedua) {
  console.log(namaPertama + " " + namaKedua);
}
