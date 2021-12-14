/*
Sum of natural numbers
input: 100

ouput: 5050

1+2+3+4+5...+99+100 =  5050
*/

var total = 0;
function sumOfNaturalsNum(n) {

    for(let i = 1; i <=n ; i++){
        
        total += i;
    }
    return total;
}


console.log(sumOfNaturalsNum(100)) // 4950
console.log(sumOfNaturalsNum(400)) // 79800
console.log(sumOfNaturalsNum(22500)) // 79800
