// Function Expression
// const tampilNama = function(nama) {
// 	return `Halo, ${nama}`;
// }
// console.log(tampilNama('Chaerul'));

// Arrow Function 1 parameter
// bisa tanpa kurung untuk paramater-nya
// const tampilNama = (nama) => {
// 	return `Halo, ${nama}`;
// }
// console.log(tampilNama('Chaerul'));

// Arrow Function parameter lebih dari 1
// harus pakai kurung untuk paramater-nya
// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Chaerul', 'Malam'));

// implisit return
// 1 parameter, isinya hanya return saja
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Chaerul'));

// Tanpa parameter
// harus pakai kurung
// tanpa parameter, isinya hanya return saja
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

let mahasiswa = ["Chaerul", "Marwan", "Sayedeh"];

// Function Expression
// let jumlahHuruf = mahasiswa.map(function(nama) {
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow Function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Mengembalikan dalam bentuk Object bukan Array lagi
let jumlahHuruf = mahasiswa.map((nama) => ({
  nama,
  // nama ditulis seperti itu karena property dan nilai(value)-nya sama, jadi nama di atas sama dengan nama: nama
  jmlHuruf: nama.length,
}));
// console.log(jumlahHuruf);
console.log(jumlahHuruf);
