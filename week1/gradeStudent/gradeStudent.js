// Pengajar akan memberikan deskripsi nilai A-E
// 80 - 100 = A
// 65 - 79 = B
// 50 - 64 = C
// 35 - 49 = D
// 0 - 34 = E
// Tampilkan deskripsi nilai dan nama siswa saat pengajar memasukkan nama dan nilai yang dia inginkan.
// Jika nilai < 0 || > 100 maka "Nilai Invalid"
// Var tetep diinput manual
// Var nama & nilai dapat diisi apa saja

var nilai = 66;
var descNilai = '';

if (nilai <= 100 && nilai >= 80) {
    descNilai = 'A';
} else if (nilai >= 65 && nilai <= 79) {
    descNilai = 'B';
} else if (nilai >= 50 && nilai <= 64) {
    descNilai = 'C';
} else if (nilai >= 35 && nilai <= 49) {
    descNilai = 'D';
} else if (nilai >= 0 && nilai <= 34) {
    descNilai = 'E';
} else {
    descNilai = 'Nilai Invalid'
};

console.log(descNilai);