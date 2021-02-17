// Template Literals / Template String
// const nama = 'Chaerul';
// const umur = 20;
// console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo!')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
	nama: 'Chaerul Marwan',
	umur: 20,
	nrp: '0000067671',
	email: 'chaerulmarwan20@gmail.com'
};

const el = `<div class="mhs">
	<h2>${mhs.nama}</h2>
	<span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);