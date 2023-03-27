'use strict';

// Activating Strict Mode
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
const private = 3213;*/

// Functions
/*
function logger() {
    console.log("My name is Yan");
}
// calling / running / invoking function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    return `Juice ${apples} apples and ${oranges} oranges`;
}
console.log(fruitProcessor(2,1))
console.log(fruitProcessor(323,122))
const num = Number('23');
*/

//Function Declarations vs. Expressions
/*
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = (calcAge1(1991));
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991)
console.log(age1, age2) */

// Arrow Functions
/*
// Function expression
const calcAge1 = function (birthYeah) {
    return 2037 - birthYeah;
}
// Arrow function

const calcAge2 = birthYeah => 2037 - birthYeah;
const age = calcAge2(1991);
console.log(age);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2023 - birthYeah;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(2001, 'Yan'))
console.log(yearsUntilRetirement(2002, 'Dima'))
*/

// Function Calling Other Functions
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice ${applePieces} piece of apple and ${orangePieces} pieces of orange`;
}
console.log(fruitProcessor(2,3));
*/

// Reviewing Functions
/*
const calcAge = function (birthYeah) {
    return 2023 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
    if (retirement > 0) {
        return `${firstName} retires in ${retirement} years`;
    } else {
        return -1;
    }
}
console.log(yearsUntilRetirement(2001, 'Yan'));
console.log(yearsUntilRetirement(1111, 'Mike'));
*/

// Introduction to Arrays
/*
const friend1 = 'Michael'
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'];

const jonas = ['Jonas', 'Schliemann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

//Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[4]);
console.log(age1, age2, age3, age4, age5)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
console.log(ages);
*/

// Basic Array Operations (Methods)
/*
const friends = ['Michael', 'Steven', 'Peter'];

// add items
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
friends.unshift('John');
console.log(friends)

//remove items
friends.pop(); // Last
const popped = friends.pop(); // Last
console.log(popped)
console.log(friends)
friends.shift(); // First
console.log(friends);


console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven')
}
*/

// Introduction to Objects
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas)
*/

// Dot vs. Bracket Notation
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas.lastName);
console.log(jonas['lastName'])

const nameKey = 'Name';
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// console.log(jonas.'last' + nameKey)
const interestedIn = prompt('What do u want to know about Jonas?' +
    ' Choose between firstName, lastName, age, jobs and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn])
} else {
    console.log("Wrong request! ")
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschedtman'
console.log(jonas)

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`)
*/

// Object Methods
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    // },
    // calcAge: function () {
    //     // console.log(this)
    //     return 2023 - this.birthYear;
    // },
    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he ${this.hasDriversLicense ? "has" : "hasn't"} a driver's license`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
// "Jonas is a 32-year old teacher and he has a driver's license"
console.log()
console.log(jonas.getSummary());
*/

// Iteration: The for Loop
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}
*/

// Looping Arrays, Breaking and Continuing
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);
    // Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i])
}

console.log(types)

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}*/

//Looping Backwards and Loops in Loops
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep}`);
    }
}*/

// The while Loop
/*
for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetition ${rep}`)
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
}
*/
