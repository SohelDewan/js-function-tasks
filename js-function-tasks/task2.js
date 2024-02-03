//### Task-2 Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEvenCondition(number){
    if(number %2 !== 0 ){
        console.log("Odd number will be Even");
        console.log(number*2)
    }else{
        console.log("Even number will be Odd");
        console.log(number/2);
    }

}
let result = oddEvenCondition(6);
oddEvenCondition(7);
// console.log(result);

// function oddEven(n){
//     if(n%2 ===0){
//         return n/2;
//     }
//     else{
//         return n*2;
//     }
// }
// let output = oddEven(6);
// console.log(output);