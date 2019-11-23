let findTheOldest = function (arr) {
    let sorted = arr.map(function (person) {
        if (person.yearOfDeath == undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        let theAge = person.yearOfDeath - person.yearOfBirth;
        return { name: person.name, age: theAge };
    });
    sorted.sort(function (a, b) {
        return b.age - a.age;
    });
    return sorted[0];
};

module.exports = findTheOldest
