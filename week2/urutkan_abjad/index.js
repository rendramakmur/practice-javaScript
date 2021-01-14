function urutkanAbjad(string) {
    let kamus = 'abcdefghijklmnopqrstuvwxyz';
    let output = '';

    for (let i = 0; i < kamus.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] ===  kamus[i]) {
                output += string[j];
            }   
        }    
    }

    return output;
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'