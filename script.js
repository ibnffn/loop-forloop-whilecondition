// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// result
// 0
// 1
// 2

// body  and update expression - hanya nambah 1 looping
let i = 0;
if (i < 3) {
  console.log(i);
  i++;
}
//result
// 0

let u = 1;
if (u < 3) {
  console.log(u);
  u++;
}
// result
// 1

let v = 2;
if (v < 3) {
  console.log(v);
  v++;
}
//result
//2

// looping x = 1 ke 5
const x = 5;
for (let y = 1; y <= x; y++) {
  console.log(`i love javascript`);
}
// result
// i love javascript 5x

// contoh menggunakan backticks + ${y}
for (let z = 1; z <= 5; z++) {
  console.log(`berapa kali dijalankan ${z}`);
}
// result
// berapa kali dijalankan 1
// berapa kali dijalankan 2
// berapa kali dijalankan 3
// berapa kali dijalankan 4
// berapa kali dijalankan 5

// contoh menggunakan backtiks dan ${t}-2 =
const len = 5;
for (let t = 1; t <= len; t++) {
  console.log(`berapa kali dijalankan ${t}`);
}
// result
// berapa kali dijalankan 1
// berapa kali dijalankan 2
// berapa kali dijalankan 3
// berapa kali dijalankan 4
// berapa kali dijalankan 5

// WHILE CONDITION - increment
let s = 0;
while (s < 3) {
  console.log(s);
  s++;
}
// result
// 0
// 1
// 2

let m = 3;
while (m > 0) {
  console.log(m);
  m--;
}
// result
// 3
// 2
// 1
