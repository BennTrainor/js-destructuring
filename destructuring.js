/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountant'
};

let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets

let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
};

let {firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(...others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "falafel",
    andrea: "chips"
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);

//challenge:
//The first and second variables will be the first two items in the array
//and the final one will be the remainder of items in the array.

//original code:

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

//solution:

//const makeList = (arr, student) => {...} defines an arrow function named makeList that takes two parameters: arr and student.
//arr.find(item => item.name === student) searches for the object in the arr array where the name property matches the provided student name.
//.subjects accesses the subjects property of the found object.
const makeList = (arr, student) => {
    return arr.find(item => item.name === student).subjects;
};

//[first, second, ...rest] uses array destructuring to assign the first two elements of the array
// returned by makeList to first and second, and the rest of the elements to rest.
let [first, second, ...left] = makeList(students, 'John');

console.log(first);  
console.log(second); 
console.log(left);   


