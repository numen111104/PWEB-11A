export const mahasiswa = [
  {
    nama: "Maulana",
    nilai: 90,
  },
  {
    nama: "Dimas",
    nilai: 80,
  },
  {
    nama: "Rizky",
    nilai: 70,
  },
  {
    nama: "Fajar",
    nilai: 60,
  },
];

export function hitungRataRata(data) {
  const total = data.reduce((jumlah, item) => jumlah + item.nilai, 0);
  return total / data.length;
}

export function tentukanPredikat(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
}
