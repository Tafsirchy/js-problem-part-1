/**
 * function takes an array as a parameter
 * give me the average off the odd numbers in the array
 */

/**
 * 1. put odd numbers in a new array
 */

function oddAverage(numbers){
    const oddNumbers = [];
    // console.log(numbers);
    for(const number of numbers){
        // console.log(number);
        if(number % 2 !== 0){
            // console.log(number);
            oddNumbers.push(number);
        }
    }
    // odd is the array that contains all the odd numbers
    // console.log(oddNumbers);
    let sum = 0;
    for(const odds of oddNumbers){
        sum += odds;
    }

    // return sum;
    const count = oddNumbers.length;
    // return count;
    const average = sum / count;
    return average;
    
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
const average = oddAverage(numbers);
// console.log('Sum of the odd numbers is:', average);
// console.log('Count of the odd numbers is:', average);
console.log('Average of the odd numbers is:',average);