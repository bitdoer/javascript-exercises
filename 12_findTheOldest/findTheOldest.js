const reduction = function(currOld, person) {
    let oldAge = (currOld.yearOfDeath ?? parseInt(new Date().getFullYear(), 10)) - currOld.yearOfBirth;
    let personAge = (person.yearOfDeath ?? parseInt(new Date().getFullYear(), 10)) - person.yearOfBirth;
    return (personAge > oldAge) ? person : currOld;
};

const findTheOldest = (people) => people.reduce(reduction);

// Do not edit below this line
module.exports = findTheOldest;
