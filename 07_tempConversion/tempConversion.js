const convertToCelsius = function(fahrenheit) {
    return Math.round((fahrenheit - 32) * 50 / 9) / 10;
};

const convertToFahrenheit = function(celsius) {
    return Math.round(celsius * 18 + 320) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
