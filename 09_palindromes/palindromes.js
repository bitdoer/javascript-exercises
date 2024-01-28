const palindromes = function (str) {
    let chars = [...str.replace(/[^0-9A-Za-z]/g, "")].map((c) => c.toLowerCase());
    let reversed = chars.slice().reverse();
    return chars.toString() === reversed.toString();
};

// Do not edit below this line
module.exports = palindromes;
