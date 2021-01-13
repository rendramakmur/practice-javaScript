function splitting(str) {
    //your code here
    let output = [];
    let array = [];
    let temp = '';
    let flag = false;
    
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '-') {
            array.push(temp);
            temp = '';
        } else if (str[i] === ',' || str[i] === undefined) {
            array.push(temp);
            temp = '';
            flag = true;
        } else {
            temp += str[i];
            flag = false;
        }
        // console.log(array, `looping ke ${i}, characternya ${str[i]}`);
        if (flag) {
            output.push(array);
            array = [];
        }
    }
    
    return output;
}

// console.log(splitting('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));

function meleeRangedGrouping (str) {
    //your code here
    if (str === '') {
        return [];
    }

    let output = [[],[]]
    let split = splitting(str);

    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < split[i].length; j++) {
            if (split[i][j] === 'Ranged') {
                output[0].push(split[i][j - 1])
            } else if (split[i][j] === 'Melee') {
                output[1].push(split[i][j - 1])
            }
        }
    }

    return output;
}

// // TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []