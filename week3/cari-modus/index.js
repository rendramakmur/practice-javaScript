function cariModus(arr) {
    // you can only write your code here!
    let tempObj = {};

    for (let i = 0; i < arr.length; i++) {
        if (tempObj[arr[i]] === undefined) {
            tempObj[arr[i]] = 1;
        } else {
            tempObj[arr[i]] += 1;
        }
    }

    let modus = [];

    for (const keyi in tempObj) {
        for (const keyj in tempObj) {
            if (tempObj[keyi] > tempObj[keyj]) {
                modus.push(keyi);
                break;
            }
        }
    }

    if (modus.length === 0) {
        return -1
    } else {
        return modus[0];
    }

    console.log(tempObj, modus);


  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1  