//### Task-3 Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        sum += numbers[i];
    }
    const len = numbers.length;
    let average = sum / len;
    return average;
}
let result = make_avg([12, 13, 14, 15]);
console.log(result); // Output: 3.5

// Second way to reach that goal but reduce() function is applied
function make_avg(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let avg = sum / arr.length;
    return avg;
  }
  let avgArr = make_avg([1, 2, 3, 4, 5]);
  console.log(avgArr); // Output: 3
    