// ======= cara pertama dengan langsung mamasukan nilai kedalam variabel =============

var nama = "Rafli Ayudiansyah";
var tempatLahir = "Cianjur";
var tanggalLahir = "31 Mei 2000";
var alamat = "Kp.Bebedahan 03/01 Desa.Cibodas Kec.Pacet Kab.Cianjur JawaBarat";

console.log(`Nama: ${nama}`);
console.log(`Tempat Lahir: ${tempatLahir}`);
console.log(`Tanggal Lahir: ${tanggalLahir}`);
console.log(`Alamat: ${alamat}`);

// ======= Cara kedua dengan menggunakan modul Readline untuk memberikan pertanyaan kepada user =============

// const readline = require("node:readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // ========== MENGGUNAKAN FUNCTION UNTUK PERTANYAAN ===========
// const pertanyaan = (pertanyaannya) => {
//   return new Promise((resolve, reject) => {
//     rl.question(pertanyaannya, (answer) => {
//       resolve(answer);
//     });
//   });
// };

// const eksekusi = async () => {
//   const nama = await pertanyaan("Tuliskan nama anda: ");
//   const tempatLahir = await pertanyaan("Tuliskan tempat lahir anda: ");
//   const tanggalLahir = await pertanyaan("Tuliskan tanggal lahir anda: ");
//   const alamat = await pertanyaan("Tuliskan alamat anda: ");
//   console.log("Terimakasih telah menjawab. Berikut adalah biodata anda: ");
//   console.log(`Nama: ${nama}`);
//   console.log(`Tempat Lahir: ${tempatLahir}`);
//   console.log(`Tanggal Lahir: ${tanggalLahir}`);
//   console.log(`Alamat: ${alamat}`);
//   rl.close();
// };
// eksekusi();

// ================= MENGGUNAKAN METODE PROMISE ====================
// const pertanyaan1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Tuliskan nama anda: ", (nama) => {
//       resolve(nama);
//     });
//   });
// };

// const pertanyaan2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Tuliskan tempat lahir anda: ", (tempatLahir) => {
//       resolve(tempatLahir);
//     });
//   });
// };

// const pertanyaan3 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Tuliskan tanggal lahir anda: ", (tanggalLahir) => {
//       resolve(tanggalLahir);
//     });
//   });
// };

// const pertanyaan4 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question("Tuliskan alamat anda: ", (alamat) => {
//       resolve(alamat);
//     });
//   });
// };

// const main = async () => {
//   const nama = await pertanyaan1();
//   const tempatLahir = await pertanyaan2();
//   const tanggalLahir = await pertanyaan3();
//   const alamat = await pertanyaan4();
//   console.log(`Nama: ${nama}`);
//   console.log(`Tempat Lahir: ${tempatLahir}`);
//   console.log(`Tanggal Lahir: ${tanggalLahir}`);
//   console.log(`Alamat: ${alamat}`);
//   rl.close();
// };
// main();

// ========== MENGGUNAKAN METODE BAR-BAR =================
// rl.question("Tulisakan nama anda: ", (nama) => {
//   rl.question("Tuliskan tempat lahir anda: ", (tempatLahir) => {
//     rl.question("Tuliskan tanggal lahir anda: ", (tanggalLahir) => {
//       rl.question("Tuliskan alamat anda: ", (alamat) => {
//         console.log(`Nama: ${nama}`);
//         console.log(`Tempat Lahir: ${tempatLahir}`);
//         console.log(`Tanggal Lahir: ${tanggalLahir}`);
//         console.log(`Alamat: ${alamat}`);
//         rl.close();
//       });
//     });
//   });
// });
