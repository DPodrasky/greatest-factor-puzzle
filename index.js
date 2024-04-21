//determines if a number is even
let isEven = function(num) {
    if (num % 2 === 0) {
        return true;
    }

    return false;
}

//finds the greatest factor of a number
let getFactor = function(num) {
    for (let i = num - 1; i >= 0; i--) {
        if (num % i === 0) {
            return i;
        }
    }
}

// main function
let greatestFactorArray = function(array) {

    let newArr = [];
    let newNum = 0;

    array.forEach(num => {
        if (isEven(num)) {
            newNum = getFactor(num);
            newArr.push(newNum);
        } else {
            newArr.push(num);
        }
    });

    return newArr;
}

//tests
console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
