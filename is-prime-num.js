/*
Cek apakah sebuah bilangan adalah bilangan prima

Input: 23
Output: 23 adalah bilangan prima

Edge Case; jika memasukan 0 atau angka negative maka return "harus memasukan angka mulai dari 2"
*/

// const isPrime = (number) => {
//     let a = 0;
//     for (let i = 2; i <= number; i++){
//     if(number%i == 0){
//         a++
//     }
// }
//     if(a == 2){
//         console.log(`${number} adalah bilangan prima`)
//       }else{
//         console.log("harus memasukan angka mulai dari 2")
//       }
//     }

// isPrime(23) // 23 adalah bilangan prima
// isPrime(7) // 7 adalah bilangan prima
// isPrime(0) // harus memasukan angka mulai dari 2
// isPrime(1) // harus memasukan angka mulai dari 2

function isPrime(number) {
   let a = 0;
for (let i = 1; i <= number; i++){
    if(number%i === 0){
        a++;
    }
}
if(a === 2){
    return (`${number} adalah bilangan prima`)
  }else{
    return("harus memasukan angka mulai dari 2")
  }
    }

console.log(isPrime(23))// 23 adalah bilangan prima
console.log(isPrime(7)) // 23 adalah bilangan prima
console.log(isPrime(0)) // harus memasukan angka mulai dari 2
console.log(isPrime(1)) // harus memasukan angka mulai dari 2
