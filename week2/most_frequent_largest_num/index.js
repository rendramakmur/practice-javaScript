function sorting(arrNumber) {
    // code di sini
    let output = arrNumber;

    for (let i = 0; i < arrNumber.length; i++) {
        for (let j = 0; j < arrNumber.length; j++) {
            if (arrNumber[j] > arrNumber [j + 1]) {
                let temp = arrNumber[j];
                arrNumber[j] = arrNumber[j + 1];
                arrNumber[j + 1] = temp;
            }
        }
    }

    return output;
}
  
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));


function getTotal(arrNumber) {
    // code di sini
    let count = 0;
    let highest = arrNumber[arrNumber.length - 1];

    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === highest) {
            count++;
        }
    }

    return count;
}

// console.log(getTotal([2, 4, 4, 5, 6, 8, 8, 8]))
  
function mostFrequentLargestNumbers(arrNumber) {
    if (arrNumber.length <= 0) {
        return '';
    }

    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);

    let highestNumber = arrNumber[arrNumber.length - 1];
    
    return `angka paling besar adalah ${highestNumber} dan jumlah kemeculan sebanyak ${countHighest} kali`
}

  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

  console.log(mostFrequentLargestNumbers([]));
  //''