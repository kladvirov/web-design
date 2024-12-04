function squareNumbers(array) {
    return array.map(number => number ** 2);
}

function doubleElements(array) {
    return array.map(element => element * 2);
}

function getFirstLetters(array) {
    return array.map(string => string.charAt(0));
}

function addPrefix(array, prefix) {
    return array.map(string => prefix + string);
}

function numbersToStrings(array) {
    return array.map(number => number.toString());
}