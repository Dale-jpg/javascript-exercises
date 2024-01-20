const removeFromArray = function removeFromArray(array, indexArray) {
    const index = array.indexOf(indexArray);
    if (index > -1) {
        array.splice(index,1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
