// versi object dengan menggunakan prototype inheritance
// function Mahasiswa(nama, energi) {
// 	// let this = Object.create(Mahasiswa.prototype); // dilakukan di belakang layar
// 	this.nama = nama;
// 	this.energi = energi;

// 	// return this; // dilakukan di belakang layar
// }

// Mahasiswa.prototype.makan = function(porsi) {
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam) {
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function(jam) {
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, selamat tidur!`;
// }

// let chaerul = new Mahasiswa('Chaerul', 10);

// versi Class
// class Mahasiswa {
// 	constructor(nama, energi) {
// 		this.nama = nama;
// 		this.energi = energi;
// 	}

// 	makan(porsi) {
// 		this.energi += porsi;
// 		return `Halo ${this.nama}, selamat makan!`;
// 	}

// 	main(jam) {
// 		this.energi -= jam;
// 		return `Halo ${this.nama}, selamat bermain!`;
// 	}

// 	tidur(jam) {
// 		this.energi += jam * 2;
// 		return `Halo ${this.nama}, selamat tidur!`;
// 	}
// }

// let chaerul = new Mahasiswa('Chaerul', 10);
// let marwan = new Mahasiswa('Marwan', 10);

// let angka = [];
// let angka = new Array(); // di belakang layar, karena ada keyword new berarti ini adalah constructor function, sebuah object yang di dalamnya pasti membawa prototype, karena dia constructor function pasti di dalamnya ada let this = Object.create(Array.prototype), pasti dia terhubung ke parent class-nya, yaitu prototype

let angka = [3, 1, 2];
console.log(angka);