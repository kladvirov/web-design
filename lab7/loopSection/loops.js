function logElements(array) {
    array.forEach(element => {
        console.log(element);
    });
}

function sumArray(array) {
    let sum = 0;
    array.forEach(number => {
        sum += number;
    });
    return sum;
}

function toUpperCase(array) {
    const result = [];
    array.forEach(element => {
        if (typeof element === 'string') {
            result.push(element.toUpperCase());
        }
    });
    return result;
}

function countNegatives(array) {
    return array.filter(number => number < 0).length;
}

function getEven(array) {
    const result = [];
    array.forEach(number => {
        if (number % 2 === 0) {
            result.push(number);
        }
    });
    return result;
}