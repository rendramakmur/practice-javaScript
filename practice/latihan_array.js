// Nomor 1

/*
===========================
Tambah penumpang Bus
============================

[INSTRUCTION]
Terdapat function tambahPenumpangBus yang menerima 2 parameter berupa :
: 
1. array multidimensi yang berisi kondisi penumpang bus yang sudah menaiki bus
2. array penumpang bus yang ingin menaiki bus
Fungsi ini akan mengembalikan array multidimensi yang sudah terisi oleh semua penumpang jika jumlah bangku yang kosong dan penumpang yang ingin naik pas / sama. (LIHAT EXAMPLE 1)
Sedangkan fungsi ini akan mengembalikan string berupa list penumpang yang tidak mendapatkan kursi, jika jumlah bangku yang kosong tidak mencukupi (LIHAT EXAMPLE 2)

[EXAMPLES]
input 1 : 
  [
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ]
input 2 : ['Budi', 'Soleh', 'Miku']
output :
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
--------------------------------------------
input 1 : 
  [
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ]
input 2 : ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong','Layla', 'Grock']
output :
'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'

[Rules]:
- Dilarang menggunakan fungsi map, reduce, filter

*/

function tambahPenumpangBus(arr1, arr2) {
    //YOUR CODE HERE
    let penampung = arr1;
    let index = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            if (arr1[i][j] === '') {
                arr1[i][j] = arr2[index];
                index++
            }
        }
    }

    let tidakDapatKursi = '';

    if (arr2.length > index) {
        for (let i = index; i < arr2.length; i++) {
            tidakDapatKursi += arr2[index];
            if (index !== arr2.length - 1) {
                tidakDapatKursi += ', ';
            }
            if (index === arr2.length - 2) {
                tidakDapatKursi += 'dan ';
            }
            index++
        }

        return `${tidakDapatKursi} tidak mendapatkan kursi bus. Silahkan cari bus lainnya.`;
    }

    // console.log(tidakDapatKursi);

    return penampung;
    
  }
  
  console.log(tambahPenumpangBus([
    ['Hary', '', 'Miftah'],
    ['', 'Tony', ''],
    ['Udin', 'Paijo', 'Butet']
  ], ['Budi', 'Soleh', 'Miku']));
  /*
  [
    ['Hary', 'Budi', 'Miftah'],
    ['Soleh', 'Tony', 'Miku'],
    ['Udin', 'Paijo', 'Butet']
  ]
  */
  
  console.log(tambahPenumpangBus([
    ['Udin', '', ''],
    ['', '', 'Dede'],
    ['Saiful', 'Paijo', 'Butet']
  ], ['Alucard', 'Balmond', 'Eudora', 'Nana', 'Miya', 'Zilong', 'Layla', 'Grock']))
  /*
  output :
  'Miya, Zilong, Layla, dan Grock tidak mendapatkan kursi bus. Silahkan cari bus lainnya'
  */


// Nomor 2

/*
===================
Coordinate Tracker
===================

[INSTRUCTIONS]
coordinateTracker adalah sebuah function yang menerima dua parameter berupa array of array dan string.
parameter string yang diterima, hanya menerima 2 yaitu:
- 'ganjil' : maka akan mencari angka ganjil
- 'genap' : maka akan mencari angka genap
- 'x' : maka akan mencari 'x'

function mencari nilai terbanyak dari parameter yang diinput, dan akan mereturn sebuah string seperti:
'<search> yang paling banyak ada di baris ke-<index>'

PS: Baris di mulai dari 1 yang paling awal, sampai baris ke akhir

[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan sintaks .split()! Jangan lupa, split bukanlah operasi array.
- Dilarang menggunakan regex .match dan lainnya!

[EXAMPLE]
input: ([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 'genap)
proses: akan mencari nulai genap paling banyak, dan akan menyimpan baris mana yang terdapat bilangan genap
output: 'genap yang paling banyak ada di baris ke-2'
*/

function cekGanjil(bilangan){
  let output = 0;

  if (bilangan % 2 !== 0) {
    output++;
  }

  return output;
}

// cekGanjil();

function cekGenap(bilangan){
  let output = 0;

  if (bilangan % 2 === 0) {
    output++;
  }

  return output;
}

// cekGenap();

function cekX(string){
  
}

function getBanyak(array, checker_function){
  
}

function coordinateTracker(arrayOfArray, search) {
  // Code here
 
}

console.log(coordinateTracker([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 'genap')); // 'genap yang paling banyak ada di baris ke-2'

console.log(coordinateTracker([
  [2, 2, 7],
  [1, 3, 5, 6],
  [1, 3, 5, 7, 9, 11]
], 'ganjil')); // 'ganjil yang paling banyak ada di baris ke-3'

console.log(coordinateTracker([
  ['o', 'o', 'o', 'x'],
  ['x', 'x', 'o'],
  ['o', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x']
], 'x')); // 'x yang paling banyak ada di baris ke-4'
