/* Tugas I
1. Mari membentuk sebuah kalimat dengan menggabung-gabungkan kata yang disimpan dalam variabel
2. Hasil yang muncul (output) dalam console: JavaScript itu asyik dan aku senang banget!
*/
var kataPertama = "JavaScript"
// Tulis kode kamu di bawah ini

console.log('JavaScript' + ' ' +  'itu' + ' ' + 'asyik' + ' ' + 'dan' + ' ' + 'aku' + ' ' + 'senang' + ' ' + 'banget!')

// Contoh penggabungan kata-kata
console.log('Hello' + ' ' + 'World!')

/* Tugas II
1. Mengakses setiap kata dalam kalimat berdasarkan index dan menyimpannya dalam variabel
2. Hasil yang muncul (output dalam console):
        First Word: Asik
        Second Word: JavaScript
        Third Word: sungguh
        Fourth Word: keren
        Fifth Word: banget!
*/

var kalimat = 'Asik JavaScript sungguh keren banget!';
var contohFirstWord = kalimat[0] + kalimat[1] + kalimat[2] + kalimat[3]; // Hasilnya adalah Asik

// tuliskan kode kalian di sini
var contohSecondWord = kalimat[5] + kalimat[6] + kalimat[7] + kalimat[8] + kalimat[9] + kalimat[10] + kalimat[11] + kalimat[12] + kalimat[13] + kalimat[14];  //hasilnya adalah JavaScript

var contohThirdWord = kalimat[16] + kalimat[17] + kalimat[18] + kalimat[19] + kalimat[20] + kalimat[21] + kalimat[22];  //hasilnya adalah sungguh

var contohFourthWord = kalimat[24] + kalimat[25] + kalimat[26] + kalimat[27] + kalimat[28];  //hasilnya adalah keren

var contohFifthWord = kalimat[30] + kalimat[31] + kalimat[32] + kalimat[33] + kalimat[34] + kalimat[35] + kalimat[36];  //hasilnya adalah banget!

console.log('First Word: ' + contohFirstWord);
// tuliskan kode kalian di sini
console.log('Second Word: ' + contohSecondWord);
console.log('Third Word: ' + contohThirdWord);
console.log('Fourth Word: ' + contohFourthWord);
console.log('Fifth Word: ' + contohFifthWord);

/* Tugas III
1. Memecah kata dalam kalimat menggunakan  Substring
2. Hasil dalam console / output: 
        First Word: Asik
        Second Word: JavaScript
        Third Word: sungguh
        Fourth Word: keren
        Fifth Word: banget!
*/

var kalimatDua = "Asik JavaScript sungguh keren banget!";
// contoh pemenggalan kalimat
var exampleFirstWord3 = kalimatDua.substring(0, 4); // Hasilnya Asik
// Tulis kode anda di sini

console.log('First Word: ' + exampleFirstWord3);
// Tulis kode ada di sini

/* Tugas IV
1. Memecahkan kalimat perkata dan menghitung banyaknya huruf dengan properti 'length'
2. Hasil di console / output:
    First Word: Asik, with length: 4
    Second Word: JavaScript, with length: 10
    Third Word: sungguh, with length: 7
    Fourth Word: keren, with length: 5
    Fifth Word: banget, with length: 6
*/

var kalimatSatu = 'Asik JavaScript Sungguh Keren Banget';
var exampleFirstWord = kalimatSatu.substring(0, 4); // Hasilnya Asik

// tulis kode anda di sini

var kalimatDua = 'Asik JavaScript Sungguh Keren Banget';
var exampleSecondWord = kalimatDua.substring(5, 15); // Hasilnya JavaScript

var kalimatTiga = 'Asik JavaScript Sungguh Keren Banget';
var exampleThirdWord = kalimatTiga.substring(16, 23); // Hasilnya Sungguh

var kalimatEmpat = 'Asik JavaScript Sungguh Keren Banget';
var exampleFourthWord = kalimatEmpat.substring(24, 29); // Hasilnya Keren

var kalimatLima = 'Asik JavaScript Sungguh Keren Banget';
var exampleFifthWord = kalimatLima.substring(30, 36); // Hasilnya Banget


var firstWordLength = exampleFirstWord.length; // Jumlah karakter dalam kata Asik
// tulis kode anda di sini

var secondWordLength = exampleSecondWord.length; // Jumlah karakter dalam kata JavaScript

var thirdWordLength = exampleThirdWord.length; // Jumlah karakter dalam kata Sungguh

var fourthWordLength = exampleFourthWord.length; // Jumlah karakter dalam kata Keren

var fifthWordLength = exampleFifthWord.length; // Jumlah karakter dalam kata Banget

console.log(
    'First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength
);
// tulis kode anda di sini

console.log(
    'Second Word: ' + exampleSecondWord + ', with length: ' + secondWordLength
);

console.log(
    'Third Word: ' + exampleThirdWord + ', with length: ' + thirdWordLength
);

console.log(
    'Fourth Word: ' + exampleFourthWord + ', with length: ' + fourthWordLength
);

console.log(
    'Fifth Word: ' + exampleFifthWord + ', with length: ' + fifthWordLength
);