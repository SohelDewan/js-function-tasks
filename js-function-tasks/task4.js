//### Task-4  Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === '0'){
            count++;
        }
    }
    return count;
}
let result = count_zero('101010');
console.log(result);

/*
count++ is a shorthand for count = count + 1. It increments the value of count by 1 and returns the original value of count. For example, if count is initially 0, then count++ will increment count to 1 and return 0. This is why the output of console.log(count++) is 0, not 1.

On the other hand, count += 1 is equivalent to count = count + 1. It increments the value of count by 1 and returns the new value of count. For example, if count is initially 0, then count += 1 will increment count to 1 and return 1.
*/

