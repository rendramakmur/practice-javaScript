/*
a -> b
i -> j
u -> v
e -> f
o -> p
A -> B
I -> J
U -> V
E -> F
O -> P
*/
// Change vocalsnya

function changeVocals (str) {
    let vocals = 'aiueoAIUEO';
    let replacement = 'bjvfpBJVFP';
    let output = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= vocals.length; j++) {
            if (str[i] === vocals[j]) {
                output += replacement[j];
                break;
            } else if (vocals[j] === undefined) {
                output += str[i];
            }
        }
    }

    return output;

}

// console.log(changeVocals('Alexei'));

// Reverse katanya
function reverseWord (str) {
    let output = '';

    for (let i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;
}

// console.log(reverseWord('Alexei'));

// Ubah huruf besar ke kecil, kecil ke besar.
function setLowerUpperCase (str) {
    let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let output = '';
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= lowerCase.length; j++) {
            if (str[i] === lowerCase[j]) {
                output += upperCase[j];
            } else if (str[i] === upperCase[j]) {
                output += lowerCase[j];
            }
        }
    }

    return output;
    
}

// console.log(setLowerUpperCase('Alexei'));

// Hilangkan semua spasi
function removeSpace (str) {
    let output = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            output += str[i]
        }
    }

    return output;
}

// console.log(removeSpace('Sergei Dragunov'));

// Gunakan semua function diatas di dalam function passGenerator
function passwordGenerator (name) {
    if (name.length <= 5) {
        return 'Minimal karakter yang diinput adalah 5 karakter'
    }

    let changeVocals = changeVocals(name);
    let reverseWord = reverseWord(changeVocals);
    let setCharCase = setLowerUpperCase(reverseWord);
    let output = removeSpace(setCharCase);

    return output;

}

// TEST CASE
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'