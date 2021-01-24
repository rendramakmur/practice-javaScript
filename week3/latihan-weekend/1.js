// Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. Fungsi bertugas untuk membuat rekap data dalam bentuk object, dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh:

// Contoh :

let dataJurusan = [
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

function sortJurusan(data) {
    let output = {};

    for (let i = 0; i < data.length; i++) {
        if (output[data[i][0]] === undefined) {
            output[data[i][0]] = []
        }

        for (const key in output) {
            // console.log(data[j][0], key);
            if (data[i][0] === key) {
                output[data[i][0]].push(data[i][1]);
            }
        }
    }

    return output;
}


console.log(sortJurusan(dataJurusan));
// output : 
// {
//   Biologi: ['Jonas', 'Barbosz', 'Edmund'],
//   Fisika: ['Ulrich', 'Claudia'],
//   Akuntansi: ['Hannah']
// }
