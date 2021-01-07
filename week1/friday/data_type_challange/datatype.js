let kata = 'rendra';


// Cek tipe data:
// Jika data merupakan sebuah string, maka tampilkan 'username ' + kata (gunakan template literals)
// Jika data merupakan sebuah number, maka tampilkan 'age: ' + data (gunakan template literals)
// Jika data merupakan sebuah boolean, cek nilainya:

// jika true maka tampilkan 'thank you for agreeing'
// jika false maka tampilkan 'cannot proceed without agreement'
// Jika nilai/value dari data adalah angka 0 atau empty string atau undefined atau null atau NaN maka tampilkan 'Invalid data'

if (!kata) {
    console.log('Invalid data');
} else {
    if (typeof kata === 'string') {
        console.log(`username ${kata}`)
    } else if (typeof kata === 'number') {
        console.log(`age: ${kata}`)
    } else if (typeof kata === 'boolean') {
        if (kata === true) {
            console.log('thank you for agreeing');
        } else {
            console.log('cannot proceed without agreement');
        }
    }
}
