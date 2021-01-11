// Tugas 1

function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut());

// Tugas 2

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

let num1 = 5;
let num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);

console.log(hasilPerkalian);

// Tugas 3

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobi yaitu ${hobby}!`
}

let nama = 'Agus';
let age = 30;
let address = 'Jln. Maliboro, Yogjakarta';
let hobby = 'gaming';

let fullSentence = processSentence(nama, age, address, hobby);

console.log(fullSentence);