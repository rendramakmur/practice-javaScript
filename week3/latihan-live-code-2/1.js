
/*
TEMBAK TARGET
=============
Tembak target adalah  sebuah permainan yang menembak target dengan melalui beberapa rintangan sampai tembakan bisa menembus target.
Diberikan sebuah function dengan nama tembakTarget dan menerima 1 parameter berupa array dengan format sebagai berikut: 
- TEMBAKAN dimulai dari index 0, TARGET berada pada index terakhir dan RINTANGAN (bisa berupa pohon atau batu) berada di antara TEMBAKAN dan TARGET.
- terdapat 4 element yang akan di isi ke dalam array sebagai berikut:
S = tembakan
P = pohon
B = batu
T = Target
" " or (space) = ABAIKAN saja
PENTING!: Tembakan hanya bisa menembus maksimal 2 pohon dan tidak bisa menembus batu.
Buatlah pseudocode dan program untuk menyelesaikan masalah ini!
Contoh 1:
Input: ["S", " ", " ", " ", " ", "T"]
Ilustrasi: S --> " " --> " " --> " " --> " " --> "T"
Output: Target terkena tembakan
Contoh 2:
Input: ["S", " ", "P", "P", " ", "T"]
Ilustrasi: S --> " " --> "P" --> "P" --> " " --> "T" 
Output: tembakan menembus 2 pohon dan target terkena tembakan
Contoh 3: 
Input: ["S", " ", "B", "P", " ", "T"]
Ilustrasi: S --> " " --x "B" // tembakan tidak bisa menembus batu
Output: tembakan tidak menembus batu dan target tidak terkena tembakan
NOTES:
    - Dilarang menggunakan built-in function apapun
    - Wajib menuliskan PSEUDOCODE!
*/


/*
PSEUDOCODE:
BEGIN tembakTarget
PASS IN: arr AS ARRAY
    STORE countPohon WITH
    
    FOR i FROM 0 TO LENGTH OF arr INCREMENT BY 1
        IF arr[i] EQUAL TO STRING "P"
        SET countPohon INCREMENT BY 1
            IF countPohon MORE THAN 2
            PASS OUT: `tembakan tidak menembus ${countPohon} pohon dan target`
            END IF
        ELSE IF arr[i] EQUAL TO STRING "B"
        PASS OUT: `tembakan tidak menembus batu dan target tidak terkena tembakan`
    END FOR

    IF countPohon EQUAL LESS THAN 2 AND countPohon IS NOT EQUAL WITH 0
        PASS OUT: `Tembakan menembus ${countPohon} pohon dan target terkena tembakan`
    ELSE IF arr[arr.length - 1] EQUAL TO STRING "T" AND countPohon EQUAL WITH 0
        PASS OUT: `target terkena tembakan`
    END IF
    
END

*/





function tembakTarget(arr) {
    let countPohon = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'P') {
            countPohon++
            if (countPohon > 2) {
                return `tembakan tidak menembus 3 pohon dan target`
            }
        } else if (arr[i] === 'B') {
            return `tembakan tidak menembus batu dan target tidak terkena tembakan`
        }
    }

    if (countPohon <= 2 && countPohon !== 0) {
        return `Tembakan menembus ${countPohon} pohon dan target terkena tembakan.`
    } else if (arr[arr.length - 1] === 'T' && countPohon === 0) {
        return `target terkena tembakan`
    }
}


console.log(tembakTarget(["S", " ", " ", " ", " ", "T"]))  // target terkena tembakan
console.log(tembakTarget(["S", " ", "P", "P", " ", "T"])) // tembakan menembus 2 pohon dan target terkena tembakan
console.log(tembakTarget(["S", " ", "B", "P", " ", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", "B", "T"])) // tembakan tidak menembus batu dan target tidak terkena tembakan
console.log(tembakTarget(["S", "P", " ", " ", " ", "T"]))  // tembakan menembus 1 pohon dan target terkena tembakan
console.log(tembakTarget(["S", "P", "P", "P", " ", "T"]))  // tembakan tidak menembus 3 pohon dan target tidak terkena tembakan