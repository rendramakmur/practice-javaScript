function targetTerdekat (arr) {
    let getIndex_o = [];
    let getIndex_x = [];
    let selisih = [];
    let output = '';

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === 'o') {
            getIndex_o.push(i);
        } else if (arr[i] === 'x') {
            getIndex_x.push(i);
        }
    }
    
    if (getIndex_x.length === 0) {
        return 0;
    }

    for (let j = 0; j < getIndex_x.length; j++) {
        if (getIndex_o[0] > getIndex_x[j]) {
            selisih.push(getIndex_o[0] - getIndex_x[j]);
        } else {
            selisih.push(getIndex_x[j] - getIndex_o[0]);
        }
    }

    for (let k = 0; k < selisih.length; k++) {
        if (selisih[0] < selisih[k]) {
            output = selisih[0];
        } else if (selisih[k] < selisih[0]) {
            output = selisih[k];
        }
    }

    // console.log(selisih);
    // console.log(getIndex_o, getIndex_x);
    return output;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2


    // for (let k = 0; k < selisih.length; k++) {
    //     if (selisih[k] < 0) {
    //         selisih [k] *= -1;
    //     }
    //     console.log(selisih[k]);
    //     for(let l = 0; l < selisih.length; l++) {
    //         if(selisih[k] > selisih[l]) {
    //             selisihTerdekat = selisih[l];
    //         }
    //     }
    // }

    // console.log(selisihTerdekat + ' Selisih terdekat');
    // console.log(selisih);