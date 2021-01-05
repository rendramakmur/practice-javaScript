/**
 * Algoritma:
 * 1. Tentukan name
 * 2. Tentukan age
 * 3. Tentukan money
 * 4. Tentukan kondisi
 * 5. Jika nama pengunjung kosong, tampilkan "Anda tidak boleh masuk!" program selesai.
 * 6. Jika tidak kosong. Lanjut ke step berikutnya.
 * 7. Jika age pengunjung < 17 tahun, maka ia hanya boleh membeli Juice. Selain itu, iya hanya boleh memesan anggur.
 * 8. Diketahui harga juice yaitu Rp50,000 dan harga anggur Rp300,000
 * 9. Jika uang tidak cukup, maka tampilkan "Uang tidak cukup, Anda harus pulang."
 * 10. Jika uang cukup, tampilkan "Anda bisa pesan minum. Sisa uang anda: [...]" dengan [...] sisa uang kembaliannya.
 * 
 *
 * 
 * Pseudocode
 * STORE name WITH ANY STRING
 * STORE age WITH ANY NUMBER
 * STORE money WITH ANY NUMBER
 *      IF nama IS FALSY
 *          DISPLAY "Anda tidak boleh masuk!"
 *      ELSE
 *          STORE sisaUang WITH 0
 *          IF age LESS THAN NUMBER 17
 *              SET sisaUang WITH money MINUS 50000
 *          ELSE
 *              SET sisaUang WITH money MINUS 300000
 *          END IF
 *          IF sisaUang LESS THAN NUMBER 0
 *              DISPLAY "Uang tidak cukup, Anda harus pulang."
 *          ELSE
 *              DISPLAY "Anda bisa pesan minum. Sisa uang anda:" CONCAT sisaUang
 * 
 * 
 */

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


if (!nama) {
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