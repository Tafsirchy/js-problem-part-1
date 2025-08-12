/**
 * array has some duplicate values or elements
 * []
 */

const biriyaniKhor = ['abul','babul', 'cabul','abul','babul','dabul','kabul','cabul'];

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array){
    // console.log(array);
    const unique = [];
    for (const element of array){
        if (unique.includes(element) === false){
            unique.push(element);
        }

    }
    return unique;
}

// const uniqueArray = noDuplicate(biriyaniKhor);
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);