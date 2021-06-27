// Destructuring Function

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const tambah = kalkulasi(2, 3)[0];
// const kurang = kalkulasi(2, 3)[1];
// console.log(tambah);
// console.log(kurang);

// const [tambah, kurang] = kalkulasi(2, 3);
// console.log(tambah);
// console.log(kurang);

// const [tambah, kurang, kali, bagi = "Tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring function arguments
const mhs1 = {
  nama: "Chaerul Marwan",
  umur: 20,
  email: "chaerulmarwan20@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}.`;
}

console.log(cetakMhs(mhs1));
