const removeFromArray = function(array, ...removals) {
    for (let removal of removals) {
        let idx = array.indexOf(removal);
        if (idx >= 0) {
            array.splice(idx, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
