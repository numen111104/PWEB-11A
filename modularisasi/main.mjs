// named import ini untuk function
import { cekStatusClass } from "./kelas.mjs";
// default import
import bebas from "./kelas.mjs";
// named import untuk variable
import { name, age, isMarried } from "./user.mjs";
// named import untuk variable dengan alias
import * as variabel from "./user.mjs";

// panggil secara langsung
console.log(name, age, isMarried);

// panggil dengan alias
console.log(variabel.name);
console.log(variabel.age);
console.log(variabel.isMarried);

// named import function
cekStatusClass("10A");

// default import function
bebas(5, 10);
