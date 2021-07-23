/* Tugas I
1. Mari membentuk sebuah kalimat dengan menggabung-gabungkan kata yang disimpan dalam variabel
2. Hasil yang muncul (output) dalam console: JavaScript itu asyik dan aku senang banget!
*/
var kataPertama = "JavaScript"
// Tulis kode kamu di bawah ini
console.log ('            ' +  'Tugas I' + '      ');
console.log ('------------------------------');
console.log(kataPertama +' itu asyik dan aku senang banget!');
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
// cara ngikutin contoh
var contohFirstWord = kalimat[0] + kalimat[1] + kalimat[2] + kalimat[3]; // Hasilnya adalah Asik

    

// tuliskan kode kalian di sini
// cara contoh
let contohSecondWord = kalimat[4] + kalimat[5] + kalimat[6] + kalimat[7] + kalimat[8] + kalimat[9] + kalimat[10] + kalimat[11] + kalimat[12] + kalimat[13] + kalimat[14];
let contohThirdWord = kalimat[15] + kalimat[16] + kalimat[17] + kalimat[18] + kalimat[19] + kalimat[20] + kalimat[21] + kalimat[22];
let contohFourthWord = kalimat[23] + kalimat[24] + kalimat[25] + kalimat[26] + kalimat[27] + kalimat[28];
let contohFifthWord = kalimat[29] + kalimat[30] + kalimat[31] + kalimat[32] + kalimat[33] + kalimat[34] + kalimat[35] + kalimat[36]; 

// cara pertama dengan substring
// let katapertama = kalimat.substring(0, 4);
// let kataKedua = kalimat.substring(5, 15);
// let kataKetiga = kalimat.substring(16, 23);
// let kataKeempat = kalimat.substring(24, 29);
// let kataKelima = kalimat.substring(30, 37);

// cara kedua dengan slice
// let ironMan = kalimat.slice(0, 4);
// let captainAmerica = kalimat.substring(5, 15);
// let hawkeye = kalimat.substring(16, 23);
// let loki = kalimat.substring(24, 29);
// let ultron = kalimat.substring(30, 37);

// console.log('First Word: ' + contohFirstWord);
// tuliskan kode kalian di sini
// hasil dari contoh
console.log ('            ' +  'Tugas II' + '      ');
console.log ('------------------------------');
console.log("First word: " + contohFirstWord);
console.log("Second word: " + contohSecondWord);
console.log("Third word: " + contohThirdWord);
console.log("Fourth word: " + contohFourthWord);
console.log('Fifth word: ' + contohFifthWord);

// hasil dengan substring
// console.log(`First word: ${katapertama}.`);
// console.log(`Second word: ${kataKedua}.`);
// console.log(`Third word: ${kataKetiga}.`);
// console.log(`Fourth word: ${kataKeempat}.`);
// console.log(`Fifth word: ${kataKelima}.`);

// hasil dengan slice
// console.log(`First word: ${ironMan}.`);
// console.log(`Second word: ${captainAmerica}.`);
// console.log(`Third word: ${hawkeye}.`);
// console.log(`Fourth word: ${loki}.`);
// console.log(`Fifth word: ${ultron}.`);


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
// // gunakan substring
let kataA = kalimatDua.substring(0, 4);
let kataB = kalimatDua.substring(5, 15);
let kataC = kalimatDua.substring(16, 23);
let kataD = kalimatDua.substring(24, 29);
let kataE = kalimatDua.substring(30, 37);

// console.log('First Word: ' + exampleFirstWord3);
// // Tulis kode ada di sini
console.log ('            ' +  'Tugas III' + '      ');
console.log ('------------------------------');
console.log("First word: " + kataA);
console.log('Second word: ' + kataB);
console.log('Third word: ' + kataC);
console.log('Fourth word: ' + kataD);
console.log('Fifth word: ' + kataE);


/* Tugas IV
1. Memecahkan kalimat perkata dan menghitung banyaknya huruf dengan properti 'length'
2. Hasil di console / output:
    First Word: Asik, with length: 4
    Second Word: JavaScript, with length: 10
    Third Word: sungguh, with length: 7
    Fourth Word: keren, with length: 5
    Fifth Word: banget, with length: 6
*/

var kalimatTiga = 'wow JavaScript is so cool';
var exampleFirstWord4 = kalimatTiga.substring(0, 4); // Hasilnya asik
// tulis kode anda di sini
let exampleSecondWord4 = kalimatTiga.substring(4, 14);
let exampleThirdWord4 = kalimatTiga.substring(15, 17);
let exampleFourthWord4 = kalimatTiga.substring(18, 20);
let exampleFifthWord4  = kalimatTiga.substring(21, 25);

var firstWordLength = exampleFirstWord4.length; // Jumlah karakter dalam kata Asik

// tulis kode anda di sini
let secondWordLength = exampleSecondWord4.length;
let thirdWordLength = exampleThirdWord4.length;
let fourthWordLength = exampleFourthWord4.length;
let fifthWordLength = exampleFifthWord4.length;

console.log ('            ' +  'Tugas IV' + '      ');
console.log ('------------------------------');
console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
// tulis kode anda di sini
console.log('Second Word: ' + exampleSecondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + exampleThirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + exampleFourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + exampleFifthWord4 + ', with length: ' + fifthWordLength);
