function createArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function contains(array, element) {
    return array.includes(element);
}

function getLength(array) {
    return array.length;
}

function addToEnd(array, element) {
    array.push(element);
    return array;
}

function getLastElement(array) {
    return array[array.length - 1];
}
