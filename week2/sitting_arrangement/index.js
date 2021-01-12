function sittingArrangement (person, column) {
    if (column < 1) {
        return 'Invalid number'
    }

    let seats = [];
    let status = true;
    let index = 0;
    
    for(let i = 0; i < person.length/column; i++) {
        let temp = [];
        for(let j = 0; j < column; j++) {
            temp.push(person[index]);
            index++

            if (person[index] === undefined) {
                temp.push('Kursi Kosong');
                break;
            }
        }
        seats.push(temp);
    }
    return seats;
}

// Mengatur duduk berdasarkan jumlah column
// Jika person tidak cukup untuk mengisi column, maka diisi dengan value "Kursi Kosong".
// Column minimal valuenya 1. Kalau kurang return 'Invalid number'.

console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]
