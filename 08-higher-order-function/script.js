// kerjakanTugas = Higher Order Function
// selesai = Callback
function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
  selesai();
}

function selesai() {
  // alert('Selesai mengerjakan tugas!');
  console.log("Selesai mengerjakan tugas!");
}

kerjakanTugas("Pemrograman Web", selesai);

// setTimeout = Higher Order Function
// function = Callback
setTimeout(function () {
  console.log("Hello World");
}, 1000);

// ucapkanSalam = Higher Order Function
function ucapkanSalam(waktu) {
  // function(nama) = Return Value Berupa Function
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

let selamatMalam = ucapkanSalam("Malam");
console.dir(selamatMalam("Chaerul"));
