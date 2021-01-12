function ladder (word) {
    let hasil = [];

    for (let i = 0; i < word.length; i++) {
        temp = [];
        for (let j = word.length; j > i; j--) {
            temp.push(word[word.length - j]);   
        }
        hasil.push(temp)
    }

    return hasil;
}

console.log(ladder('hacktiv8'));