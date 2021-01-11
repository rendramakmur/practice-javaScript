// Antrian

function antrian (line, person) {
    line.push(person);
    return line;
}

let arr1 = ['Ronaldo', 'Messi', 'Lewandowski', 'Neymar'];
let person = 'Mbappe';

console.log(antrian(arr1, person));

// Panggil Antrian

function panggilAntrian (line) {
    line.shift();
    return line;
}


let arr2 = ['Aguero', 'Pique', 'Xavi', 'Alonso'];

console.log(panggilAntrian(arr2));

// Tumpukan

function tumpukan (line, title) {
    line.unshift(title);
    return line;
}

let arr3 = ['Man In Black', 'Kung Fu Panda', 'Start-Up', 'Game of Thrones'];
let judulFilm = 'Attack on Titan';

console.log(tumpukan(arr3, judulFilm));

// Ganjil Genap

function ganjilGenap (plat) {
    let flag = false;
    let ganjil = 0;
    let genap = 0;
    let temp = '';
    
    for(let i = 0; i <= plat.length; i++) {
        if (plat === '') {
            return `plat tidak ditemukan`;
        } else if (!plat) {
            return `invalid data`
        } else {
            if (plat[i] !== ';') {
                flag = true;
            } 
        
            if (plat[i] === ';' || plat[i] === undefined) {
                flag = false;
                if (!flag && temp % 2 != 0) {
                    ganjil++
                } else if (!flag && temp % 2 == 0) {
                    genap++
                }
                temp = '';
            }
        
            if (flag) {
                temp += plat[i];
            }
        }
        }
    return `Plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
}

let plat = '';

console.log(ganjilGenap(plat));


