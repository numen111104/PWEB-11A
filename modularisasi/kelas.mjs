export function cekStatusClass(kelas) {
  let status = "";
  if (kelas == "10A") {
    status = "Kelas 10A adalah kelas RPL";
  } else if (kelas == "10B") {
    status = "Kelas 10B adalah kelas BD";
  } else {
    status = "Kelas tidak ditemukan";
  }
  return console.log(status);
}

export function halloWorld() {
  return console.log("Hallo World");
}

export default function multiply(a, b) {
  return console.log(a * b);
}
