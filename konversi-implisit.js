// Konversi Implisit => Konversi otomatis dari javascript tanpa instruksi eksplisit dari programmer

const age = 40;
const message = "Anda berumur: " + age;
const jumlah = "40" + 40; //'4040'

console.info('Konversi Implisit String dan Number');
console.log(message); 
console.log(age);
console.log(jumlah); //4040
console.log(Number(jumlah) + age); //120 //4080 


const boolean = true; // 1 dan 0
const nomor = 10;
const result = boolean + nomor;

console.info('Konversi Implisit Boolean dan Number')
console.log(result);

const pertanyaan = jumlah + boolean; //semua di konversi menjadi string 4040true
console.info('Konversi Implisit Boolean dan String')
console.log(pertanyaan); //4040true

const gabungan = jumlah + boolean + nomor; //4040true10 //semua di konversi menjadi string
console.log(gabungan);


