// Destructuring Variable / Assignment

// Destructuring Array
// const perkenalan = ['Halo', 'nama', 'saya', 'Chaerul Marwan'];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
// 	return [1, 2];
// }

// const [a, b] = coba();
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20
// }

// const {
// 	nama,
// 	umur
// } = mhs;
// // nama variabel-nya harus sama dengan nama property-nya
// console.log(nama);

// Assignment tanpa deklarasi object
// ({
// 	nama,
// 	umur
// } = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20
// });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20
// }

// const {
// 	nama: n,
// 	umur: u
// } = mhs;
// console.log(u);

// Memberikan Default Value
// const mhs = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20,
// 	email: 'chaerulmarwan20@gmail.com'
// }

// const {
// 	nama,
// 	umur,
// 	email = 'email@default.com'
// } = mhs;
// console.log(email);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20,
// 	email: 'chaerulmarwan20@gmail.com'
// }

// const {
// 	nama: n,
// 	umur: u,
// 	email: e = 'email@default.com'
// } = mhs;
// console.log(e);

// Rest Parameter
// const mhs = {
// 	nama: 'Chaerul Marwan',
// 	umur: 20,
// 	email: 'chaerulmarwan20@gmail.com'
// }

// const {
// 	nama,
// 	...value
// } = mhs;
// console.log(value);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
	id: 123,
	nama: 'Chaerul Marwan',
	umur: 20,
	email: 'chaerulmarwan20@gmail.com'
}

// menerima argument berupa object mhs, kemudian dibongkar dan yang diambil hanya id-nya saja
function getIdMhs({
	id
}) {
	return id;
}

// mengirimkan argument berupa object mhs
console.log(getIdMhs(mhs));