// For Of
// Array
// const mhs = ["Chaerul", "Marwan", "Sayedeh"];

// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = 'Chaerul';
// for (const n of nama) {
// 	console.log(n);
// }

// const mhs = ["Chaerul", "Marwan", "Sayedeh"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke-${i + 1}`);
// }

// NodeList
// const liNama = document.querySelectorAll(".nama");

// liNama.forEach((n) => console.log(n.textContent));

// for (const n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments
// function jumlahkanAngka() {
//   // return Array.from(arguments).reduce((a, i) => a + i);

//   // let jumlah = 0;
//   // [1, 2, 3, 4, 5].forEach((a) => (jumlah += a));

//   let jumlah = 0;
//   for (const a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For In
const mhs = {
  nama: "Chaerul",
  umur: 20,
  email: "chaerulmarwan20@gmail.com",
};

for (const m in mhs) {
  // console.log(m);
  console.log(mhs[m]);
}
