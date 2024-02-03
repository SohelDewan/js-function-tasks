//### Task-5 Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`

function oddEven(number){
    if(number %2 !== 0 ){
        console.log("Odd");
    }else{
        console.log("Even");
    }
}
oddEven(114);
