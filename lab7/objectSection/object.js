function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

function getKeys(obj) {
    return Object.keys(obj).join(', ');
}

function isEqual(obj1, obj2) {
    return obj1 === obj2;   
}

function removeKey(obj, key) {
    if (hasKey(obj, key)) {
        delete obj[key];
    }
}

function isValueEqual(obj, key, value) {
    return hasKey(obj, key) && obj[key] === value;
}