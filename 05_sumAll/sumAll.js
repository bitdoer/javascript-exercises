const sumAll = function(start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return 'ERROR';
    }
    let first = (start < end ? start : end);
    let last = (start > end ? start : end);
    if (first < 0) {
        return 'ERROR';
    }

    let sum = 0;

    for (let i = first; i <= last; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
