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