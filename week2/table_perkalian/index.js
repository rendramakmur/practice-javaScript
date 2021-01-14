// function tabelPerkalian (angka) {
//     let perkalian = [];
//     let table = [];

//     for (let i = 0; i <= angka; i++) {
//         if (angka % i === 0) {
//             perkalian.push(i);
//         }
//     }
//     console.log(perkalian);

//     for (let j = 0; j < perkalian.length; j++) {
//         if (j === perkalian.length - j) {
//             break;
//         } else {
//             table.push(`${perkalian[j]}x${perkalian[perkalian.length - 1 - j]}`)
//         }
//     }
//     // console.log(table);
//     return table;
// }

// SHORTER WAY

function tabelPerkalian(angka) {
    // you can only write your code here!
    let result = [];
    for (let i = 1; i <= angka; i++) {
      // kalau i udah lebih besar daripada hasil baginya, maka di break
      if (i > angka/i) {
        break;
      }
      if (angka % i === 0) {
        result.push(`${i}x${angka/i}`)
      }
    }
  
    return result;
  }
  

// TEST CASES
console.log(tabelPerkalian(24)); // [ '1x24', '2x12', '3x8', '4x6' ]
console.log(tabelPerkalian(90)); // [ '1x90', '2x45', '3x30', '5x18', '6x15', '9x10' ]
console.log(tabelPerkalian(20)); // [ '1x20', '2x10', '4x5']
console.log(tabelPerkalian(179)); // [ '1x179' ]
console.log(tabelPerkalian(1)); // [ '1x1' ]