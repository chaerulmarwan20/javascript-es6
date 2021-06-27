// console.log(nama);
// var nama = 'Chaerul';
// console.log(nama);

// creation phase (fase kreasi/pembentukan) pada Global Context
// nama var = undefined
// nama function = fn() (tulisan function-nya, tidak dijalankan function-nya)
// hoisting / diangkat ke atas
// window = global object
// this = window

// execution phase

// console.log(sayHello());

// var nama = "Chaerul";
// var umur = 20;

// function sayHello() {
// 	return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }
// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = "Chaerul Marwan";
// var username = '@chaerul_marwan';

// function cetakURL() {
// 	var instagramURL = 'http://instagram.com/';
// 	return instagramURL + username;
// }

// console.log(cetakURL('@mrsayedeh', '@arull.jpg'));

// function a() {
//   console.log("ini a");

//   function b() {
//     console.log("ini b");

//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }

// a();

function satu() {
  var nama = "Chaerul";
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = "Marwan";
satu();
dua("Sayedeh");
console.log(nama);
