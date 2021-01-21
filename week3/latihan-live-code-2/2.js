/**
 * ===================================
 * Seleksi masuk Hacktiv8
 * ===================================
 * 
 * Function checkAdmission akan mengecek apakah seseorang pendaftar bisa menjadi student baru Hacktiv8.
 * Student baru direpresentasikan dengan object dengan parameter:
 * - `name`  : Nama dari calon student
 * - `dob`   : Tanggal lahir dari calon student dengan format dd/mm/yyyy
 * - `date`  : Tanggal student tersebut mendaftar ke universitas ini dengan format dd/mm/yy
 * - `scores`: Array berisi nilai-nilai dari student tersebut, dengan urutan:
 *             [nilai_wawancara, nilai_logika, nilai_bahasa_inggris]
 * 
 * Syarat masuk adalah student memperoleh nilai rata-rata 65 keatas.
 * Pendaftar yang berhasil masuk akan mendapatkan id dengan format:
 * [2 digit terakhir tahun pendaftaran] + [2 digit bulan pendaftaran] + [2 digit terakhir tahun kelahiran] + [2 digit bulan kelahiran]
 * contoh 1:
 * {
 *  name: 'Raline',
 *  dob: '10/05/1987',
 *  date: '14/09/2020',
 *  scores: [85,70,95]
 * }
 * 
 * maka student id Raline adalah:
 * 20098705
 * 
 * 
 * Function akan menerima input berupa object student, lalu akan mengoutput object dengan format: 
 *  { 
 *     name: 'Raline',
 *     id  : '20098705',
 *     status: 'pass'
 *  }
 * 
 * -status: bisa berisi 'pass' atau 'fail'
 * 
 *  * contoh 2:
 * {
 *  name: 'Dewi',
 *  dob: '10/05/1997',
 *  date: '14/09/2020',
 *  scores: [60,50,50]
 * }
 * 
 * 
 * Function akan menerima input berupa object student, lalu akan mengoutput object dengan format: 
 *  { 
 *     name: 'Dewi',
 *     status: 'fail'
 *  }
 * 
 * 
 * Rules:
 * - Dilarang menggunakan built-in function apapun
 *
 */


function checkAdmission (student) {
    let id = '';
    let output = {
        name: student.name,
    }
    let avg = 0;

    for (let i = 0; i < student.scores.length; i++) {
        avg += student.scores[i]/student.scores.length;
    }

    if (avg > 65) {
        output.status = 'pass';
    } else {
        output.status = 'fail';
    }

    if (output.status === 'pass') {
        id = student.date[student.date.length - 1] + student.date[student.date.length - 2] + student.date[4] + student.date[3] + student.dob[student.dob.length - 1] + student.dob[student.dob.length - 2] + student.dob[4] + student.dob[3]

        output.id = id
        return output;
    } else {
        return output;
    }


}



console.log(checkAdmission({
    name: 'Dewi',
    dob: '10/05/1997',
    date: '14/09/2020',
    scores: [60,50,50]
}))
// { 
//    name: 'Dewi',
//    status: 'fail'
// }


console.log(checkAdmission({
    name: 'sam',
    dob: '10/05/1997',
    date: '14/09/2020',
    scores: [80,75,90]
}))

// {
//     nama: 'sam',
//     id: '20099705'
//     status: 'pass',
// }