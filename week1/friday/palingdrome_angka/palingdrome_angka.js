// Diberikan sebuah variabel angkabertipe number.

// Buatlah program yang menampilkan angka palindrome selanjutnya dari angkayang diberikan.

// Contoh jika angkabernilai 27 maka outputnya adalah 33 karena angka 33 merupakan angka palindrome.

// penjelasan:

// setelah angka 27, adalah:

// 28 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
// 29 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
// 30 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
// 31 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
// 32 bukan angka palindrome. karena belum mendapatkan angka palindrome maka ditambahkan lagi
// 33 angka palindrome. Karena angka palindrome telah ditemukan maka loop harus berhenti dan menampilkan angka 33
// Contoh 1:
// let angka = 10

// maka output yang dihasilkan adalah 11

// Contoh 2:
// let angka = 175

// maka output yang dihasilkan adalah 181



let angka = '23';
let reverse = '';
let palindrome = false;
let check = true;

while (check) {

    for(let i = (angka.length - 1); i >= 0; i--) {
        reverse += angka[i];
    }

    if (angka == reverse) {
        palindrome = true;
    } else {
        palindrome = false;
    }

    Number(angka);

    if (palindrome === false) {
        angka++;
    } 

    angka.toString;

    if (palindrome === true) {
        break;
    }
    
}

console.log(angka);