// Pengunjung bar direpresentasikan dengan variable name, age, dan money
var nama = prompt('Masukkan nama anda:');
var age = prompt('Masukan umur anda:');
var money = 60000;
var hargaJuice = 50000;
var hargaAnggur = 300000;


// Jika name-nya kosong maka tampilkan di console "Anda tidak boleh masuk!" program selesai.

// Jika age-nya di bawah 17 tahun, maka ia hanya boleh memesan juice. Jika di atas 17 tahun, hanya boleh memesan anggur

// Juice harganya 50.000 sedangkan anggur harga 300.000

// Jika uang yang dimiliki tidak cukup, maka tampilkan console "Uang tidak cukup. Anda harus pulang." Jika cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]". Ganti [...] dengan sisa uang yang telah dikurangi oleh harga minuman.


if (nama === '' || nama === null) {
    console.log('Anda tidak boleh masuk!');
} else { // else ini kondisi yang menyatakan apabila tidak memenuhi if-nya, maka akan berlanjut. Apabila if-nye terpenuhi maka program selesai.

var sisaUang = 0;
if (age < 17) {
    sisaUang = money - hargaJuice;
} else {
    sisaUang = money - hargaAnggur;
}

if(sisaUang < 0) {
    console.log('Uang tidak cukup. Anda harus pulang');
} else {
    console.log('Anda bisa pesan minum. Sisa uang anda: ' + sisaUang);
}

}