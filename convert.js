// 12 inch = 1 feet

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}

// 75
function inchToFeet2 (inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction)
    const inchRemaining = inch % 12;
    const result = feetNumber + ' feet ' + inchRemaining + ' inch. '
    return result;
}

const height = inchToFeet(75);
// console.log(height);
const height2 = inchToFeet2(75);
// console.log(height2);

// miles to kilometer
function milesToKilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}

const miles = milesToKilometer(10);
console.log('Kilometer is: ',miles.toFixed(2));

//kilometer to miles
function kilometerToMiles(kilometer){
    const miles = kilometer * 0.621371;
    return miles;
}

const kilometer = kilometerToMiles(16.09);
console.log('Miles is: ',kilometer.toFixed(2));



