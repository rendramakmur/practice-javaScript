// /**
//  * Pilihan Makanan
//  *
//  * Kamu dititipkan anak dari kakakmu dan diminta untuk
//  * menjaganya selama 3 jam. Kebetulan tepat dengan jam
//  * makan siang, jadi kamu bisa sekalian ajak makan.
//  *
//  * Diberikan list harga makanan di restoran,
//  * list alergi anaknya, dan budget untuk makan siang,
//  * pilihlah makanan yang cocok untuk anak kakakmu.
//  *
//  * note: jika tidak ada makanan yang cocok, kamu
//  * akan pulang dan masak di rumah
//  */



function pilihMakanan(menuResto, listAlergi, budget) {
  let output = [];
  let temp = '';
  
  for (let i = 0; i < menuResto.length; i++) {
    let isAlergi = false;

    for (let j = 0; j < listAlergi.length; j++) {
      if (menuResto[i][0] === listAlergi[j]) {
        isAlergi = true;
        // console.log(menuResto[i][0], listAlergi[j], isAlergi);
      }
    }

    if (!isAlergi && budget >= menuResto[i][1]) {
      temp += menuResto[i][0];
      output.push(temp);
      temp = '';
    }

    if (output.length === 0) {
      output.push('masak di rumah')
    }

  }
  
  return output;
}

let menu = [
  ["ikan", 50000],
  ["ayam", 15000],
  ["roti tawar", 5500]
]
console.log(pilihMakanan(menu, ["kismis", "roti tawar", "ikan"], 50000))
// [ 'ayam' ]

console.log(pilihMakanan(menu, ["kismis", "kacang", "sapi panggang"], 50000))
// [ 'ikan', 'ayam', 'roti tawar' ]

console.log(pilihMakanan(menu, ["kismis", "kacang", "sapi panggang"], 15000))
// [ 'ayam', 'roti tawar' ]

console.log(pilihMakanan(menu, ["ayam", "ikan"], 5000))
// [ 'masak di rumah' ]

// ini jangan dihapus, jangan diubah
module.exports = pilihMakanan