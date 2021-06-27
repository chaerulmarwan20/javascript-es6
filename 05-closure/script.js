// function init() {
// 	// let nama = 'Chaerul';

// 	return function(nama) {
// 		console.log(nama);
// 	}
// }
// let panggilNama = init();
// panggilNama('Chaerul');
// panggilNama('Marwan');

// factories function
// function ucapkanSalam(waktu) {
// 	return function(nama) {
// 		console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
// 	}
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi('Chaerul');
// selamatMalam('Marwan');
// console.dir(selamatMalam('Sayedeh'));

// Private method
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
