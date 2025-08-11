/**
 * Simple logic
 * year will be a leap year if the year is divisible by 4
 */

function isLeapYear(year){
    if(year % 4 == 0){
        return true;
    }
    else{
        return false;
    }
}

const year = isLeapYear(2052);
// console.log(year);

/**
 * 1. Those year that is not divisible by 100, if the year is divisible by 4 then it is a leap year
 * if the year is divisible by 100 and 400 then it is a leap year
 * else it is not a leap year
 */

function isLeapYear2(year){
    if(year % 100 !== 0 && year % 4 == 0){
        return true;
    }
    else if(year % 100 === 0 && year % 400 == 0){
        return true;
    }
    else{
        return false;
    }
}


const year2 = isLeapYear2(2100);
console.log(year2);
const year3 = isLeapYear2(2400);
console.log(year3);
const year4 = isLeapYear2(1900);
console.log(year4);
const year5 = isLeapYear2(2052);
console.log(year5);



