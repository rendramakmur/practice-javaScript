// Buat 3 var, nama, nilai, absen
// Tentukan lulus atau tidak
// Lulus apabila nilai lebih besar dari 70
// Absen dibawah 5 kali
// Obj: Tampilkan nama murid lulus atau tidak lulus

var nama = prompt('Masukkan nama:');
var nilai = prompt('Masukkan nilai: ');
var absen = prompt('Berapa jumlah absennya?');
var kelulusan = '';

if(nilai > 70 && absen < 5) {
    kelulusan = 'Lulus';
} else {
    kelulusan = 'Tidak Lulus';
}

alert('Mahasiswa dengan nama: ' + nama + ', Dinyatakan: ' + kelulusan);