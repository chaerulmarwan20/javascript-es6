// 1. Object Literal
// ! PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
// 	nama: 'Chaerul',
// 	energi: 10,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Selamat makan ${this.nama}, selamat makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama: 'Marwan',
// 	energi: 20,
// 	makan: function(porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Selamat makan ${this.nama}, selamat makan!`);
// 	}
// }

// 2. Function Declaration
// const methodMahasiswa = {
// 	makan: function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	},
// 	main: function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	},
// 	tidur: function(jam) {
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, selamat tidur!`);
// 	}
// };

// function Mahasiswa(nama, energi) {
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
// 	mahasiswa.makan = methodMahasiswa.makan;
// 	mahasiswa.main = methodMahasiswa.main;
// 	mahasiswa.tidur = methodMahasiswa.tidur;

// 	return mahasiswa;
// }

// let chaerul = Mahasiswa('Chaerul', 10);
// let marwan = Mahasiswa('Marwan', 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	this.main = function(jam) {
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain!`);
// 	}
// }

// let chaerul = new Mahasiswa('Chaerul', 10);

// 4. Object.create()
const methodMahasiswa = {
  umur: 21,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let chaerul = Mahasiswa("Chaerul", 10);
let marwan = Mahasiswa("Marwan", 20);
