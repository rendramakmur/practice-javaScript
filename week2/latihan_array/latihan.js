
// Jika bensin habis sebelom sampai finish maka tampilkan "Bensin nya habis tengah balapan !"
// Jika bensin habis sebelom sampai finish tetapi berhasil nyalip mercy tampilkan "BMW berhasil nyalip <berapa> mercy"
// Jika berhasil finish sampai akhir tampilkan "BMW yang paling kenceng daripada mercy";

/**
 * RULES 
 * 
 * - Setiap maju 1 langkah bensin berkurang 1
 * - Setiap nyalip mercy bensin berkurang 2
 * 
 */


function balapan(array, bensin) {
    let salip = 0;
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] === 'mercy' && bensin > 1) {
            bensin -= 2;
            salip++
        } else {
            bensin--;
        }
        
        if (bensin <= 0) {
            if (salip > 0) {
                return `BMW berhasil nyalip ${salip} mercy`;
            } else if (salip === 0) {
                return 'Bensin nya habis tengah balapan!';
            }
        }
    }
    return 'BMW yang paling kenceng daripada mercy';
}



console.log(balapan(['bmw', '=', '=', '=', '=', 'mercy', '=', 'mercy', 'finish'], 14));
// Jika berhasil finish sampai akhir tampilkan "BMW yang paling kenceng daripada mercy";

console.log(balapan(['bmw', '=', '=', 'mercy', '=', 'mercy', '=', 'mercy', 'finish'], 4));
// Jika bensin habis sebelom sampai finish tetapi berhasil nyalip mercy tampilkan "BMW berhasil nyalip <berapa> mercy"

console.log(balapan(['bmw', 'mercy', '=', 'mercy', 'finish'], 1));
// Jika bensin habis sebelom sampai finish maka tampilkan "Bensin nya habis tengah balapan !"

console.log(balapan(['bmw', '=', 'finish'], 2));
// Jika berhasil finish sampai akhir tampilkan "BMW yang paling kenceng daripada mercy";ni garasi sesudah di pop');

