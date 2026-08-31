// SISTEM PENENTUAN GAJI KARYAWAN
// WAJIB PAKAI ARROW FUNCTION
// Buat satu function dengan nama hitungGaji yang memiliki 3 parameter (nama, gajiPokok, jumlahJamLembur)
// Ketentuannya sebagai berikut:
// - Setiap jam lembur (per jam) mendapatkan tambahan Rp25.000
// - Hitung total uang lembur (jumlahJamLembur * 25.000)
// - Hitung gaji pokok sebelum bonus (gajiPokok + uangLembur)
// - Karyawan mendapatkan bonus berdasarkan gaji sebelum bonus dengan ketentuan:
// Jika gaji >= 5.000.000 -> bonus 10%,
// Jika gaji >= 3.000.000 -> bonus 5%,
// Jika kurang dari 3.000.000 -> tidak dapat bonus
// - Hitung gaji akhir (gajiSebelumBonus + bonus)
// - Gunakan ternary operator untuk menentukan status:
// Gaji Akhir >= 5.000.000 -> "Gaji nama Lumayan Tinggi"
// Gaji Akhir selain itu -> "Gaji nama Standar"
// Return value functionnya harus string

const hitungGaji = (nama, gajiPokok, jumlahJamLembur) => {
    const bonusLemburPerJam = 25000;
    const totalUangLembur = bonusLemburPerJam * jumlahJamLembur;
    const gajiPokokSebelumBonus = gajiPokok + totalUangLembur;
    // lanjutkan
}