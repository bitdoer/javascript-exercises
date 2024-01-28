function fibTail(n, last, curr) {
    switch (parseInt(n, 10)) {
        case 0:
            return 0;
        case 1:
            return curr;
        default:
            if (parseInt(n, 10) < 0) { return "OOPS"; }
            return fibTail(n - 1, curr, last + curr);
    }
}

const fibonacci = (n) => fibTail(n, 0, 1);

// Do not edit below this line
module.exports = fibonacci;
