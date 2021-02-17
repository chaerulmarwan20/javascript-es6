// Tagged Templates
// const nama = 'Chaerul Marwan';
// const umur = 20;

// function coba(strings, ...values) {
// 	// let result = '';
// 	// strings.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ''}`;
// 	// 	// kalo values ada isinya, tampilkan. tapi begitu values-nya tidak ada isinya, tampilkan string kosong supaya undefined-nya tidak keluar
// 	// });
// 	// return result;

// 	return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = 'Chaerul Marwan';
const umur = 20;
const email = 'chaerulmarwan20@gmail.com';

function higlight(strings, ...values) {
	return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = higlight `Halo, nama saya ${nama}, saya ${umur} tahun, dan email saya adalah ${email}.`;
document.body.innerHTML = str;