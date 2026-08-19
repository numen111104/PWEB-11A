// 3 Jenis Operator

// Unary Operator => Operator yang memiliki satu operan
typeof "Dicoding";



// Binary Operator => Operator yang memiki dua operan
4 + 5;
10 / 2;
5 * 4;

// Ternary Operator => Operator yang memiliki 3 operan
let inputAge = 15;
let maxAge = 18

// cara menggunakan percabangan atau if else
if (inputAge <= maxAge) {
    console.log("Maaf Anda Belum layak nonton ini");
} else if (inputAge == maxAge) {
    console.log("Umur anda pas pasan!");
} else {
    console.log("Silahkan nonton sepuasnya!");
}

// menggunakan ternary operator
(inputAge <= maxAge) ? "Maaf Anda belum layak tonton" : "Selamat Menonton sepuasnya";

//Assingment operator '=' : menginisiasi nilai dan memperbarui nilai
console.info('Operator Assignment');
var variabel = 90;
console.log(variabel); // 90
variabel = 40;
console.log(variabel) //40

// Operator Aritmatika tambahan
// Increment (++)
var x = 50;
var y = 50
console.info("Operator Aritmatika: Increment "); // untuk menambah 1 nilai dari variabel
console.log(x++); //50
console.log(x++); //51 
console.log(++y); //51
console.log(++y); //52
// console.log(x++); 
// console.log(x++); 
// console.log(x++); 
// console.log(x++);

// Decrement (--)
var z = 100;
console.info("Operator Aritmatika: Decrement "); // untuk mengurangi 1 nilai dari variabel
console.log(z--); //100
console.log(z--); //99

console.log(--z); //97
console.log(--z); //96

// Exponensial (**)
var c = 4;
console.info("Operator Aritmetika: Exponensial (pangkat)");
console.log(c ** 2); //16
console.log(c ** c); //256



// Comparison Operator / Operasi Perbandingan => Membandingkan 2 nilai dan mengembalikan 2 nilai (true/false)
console.info("Comparison Operator");
// Sama (==) => Untuk membandingkan ke dua operand apakah nilainya sama tanpa membandingkan tipe datanya.
console.info("Operator Sama (==)");
let a = 10;
let b = '10';
let isAEqualB = a == b; // true or false
console.log(isAEqualB);

// Tidak Sama (!=) => Untuk membandingkan ke dua operand apakah nilainya tidak sama tapi tidak dengan tipe datanya.
let isANotEqualB = a != b;
console.log(isANotEqualB); // false or true

// false == false = true
console.info("RUMUS OPERASI PERBANDINGAN")
console.info("Sama (==)")
console.log(false == false);
console.log(false == true);
console.log(true == true);

console.info("Tidak Sama (!=)")
console.log(false != false);
console.log(false != true);
console.log(true != true);

// Identik (===) => Untuk membandingkan ke dua operand apakah nilainya sama dan juga tipe datanya.
console.info("Operator Identik (===)");
let d = 10;
let e = "10";
let isDEqualE = d === e;
console.log(isDEqualE);










