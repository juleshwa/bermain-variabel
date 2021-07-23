/* Tugas I
1. Mari membentuk sebuah kalimat dengan menggabung-gabungkan kata yang disimpan dalam variabel
2. Hasil yang muncul (output) dalam console: JavaScript itu asyik dan aku senang banget!
*/
var kataPertama = "JavaScript"
// Tulis kode kamu di bawah ini

var kataKedua = "itu"
var kataKetiga = "asyik"
var kataKeempat = "dan"
var kataKelima = "aku"
var kataKeenam = "senang"
var kataKetujuh = "banget !"

console.log(kataPertama + ' ' + kataKedua + ' ' + kataKetiga + ' ' + kataKeempat + ' ' + kataKelima + ' ' + kataKeenam + ' ' + kataKetujuh)

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
var contohFirstWord = kalimat[1] + kalimat[2] + kalimat[3] + kalimat[4]; // Hasilnya adalah Asik

// tuliskan kode kalian di sini

console.log('First Word: ' + contohFirstWord);
// tuliskan kode kalian di sini

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

let kataA = kalimatDua.substring(0, 4);
let kataB = kalimatDua.substring(5, 15);
let kataC = kalimatDua.substring(16, 23);
let kataD = kalimatDua.substring(24, 29);
let kataE = kalimatDua.substring(30, 37);

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

var kalimatTiga = 'wow JavaScript is so cool';
var exampleFirstWord4 = kalimatTiga.substring(0, 4); // Hasilnya asik
// tulis kode anda di sini

console.log(`First word: ${kataA}.`);
console.log(`Second word: ${kataB}.`);
console.log(`Third word: ${kataC}.`);
console.log(`Fourth word: ${kataD}.`);
console.log(`Fifth word: ${kataE}.`);

var firstWordLength = exampleFirstWord4.length; // Jumlah karakter dalam kata Asik
// tulis kode anda di sini

console.log(
    'First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength
);
// tulis kode anda di sini
