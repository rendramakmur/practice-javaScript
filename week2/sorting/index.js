// Release 0

function sorting(array) {
    // your code here
    let output = array;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return output;
}
  
console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]


// Release 1

function sortingByType(array) {
    // your code here
    let output = [[],[],[]];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            output[0].push(array[i]);
        } else if (typeof array[i] === 'string') {
            output[1].push(array[i]);
        } else if (typeof array[i] === 'boolean') {
            output[2].push(array[i]);
        }
    }

    // SORT NUMBER
    sorting(output[0]);

    // for (let i = 0; i < output[0].length; i++) {
    //     for (let j = 0; j < output[0].length; j++) {
    //         if (output[0][j] > output[0][j + 1]) {
    //             let temp = output[0][j];
    //             output[0][j] = output[0][j + 1];
    //             output[0][j + 1] = temp;
    //         }
    //     }
    // }

    // SORT STRING
    let kamus = 'abcdefghijklmnopqrstuvwxyz'
    let temp = []

    for (let i = 0; i <= kamus.length; i++) {
        for (let j = 0; j < output[1].length; j++) {
            if (output[1][j][0] === kamus[i]) {
                // output[1].push(output[1][j]); // Error jadi infinity loop ???
                temp.push(output[1][j]);
            }
        }
    }

    output[1] = temp;
    
    // SORT BOOLEAN
    if (output[2][0] === true) {
        output[2][0] = false;
        output[2][1] = true;
    }

    return output;
}

console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ]

// Release 2
function sortAllClean(array) {
    //your code here

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === NaN || !array[i] && array[i] !== false) {
            array[i] = array.pop();
        }

        if (array[i] && array[i].length <= 0) {
            array[i] = array.pop();
        }
    }

    if (array[0] === undefined) {
        return [];
    }

    // console.log(array);
    return sortingByType(array);
}

console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([ NaN, undefined ])); // []
