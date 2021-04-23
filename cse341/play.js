// const fname = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;

// // function summarizeUser(userName, userAge, userHasHobby) {
// //     return ( 
// //     'Name is ' +
// //     userName +
// //     ', age is ' +
// //     userAge +
// //     ' and the user has hobbies: ' +
// //     userHasHobby
// //     );
// // }

// // same as:
// const summarizeUser  = (userName, userAge, userHasHobby) => {
//     return ( 
//     'Name is ' +
//     userName +
//     ', age is ' +
//     userAge +
//     ' and the user has hobbies: ' +
//     userHasHobby
//     );
// }

// // const add = (a,b) => {
// //     return a + b;
// // };

// //same as 
// const add = (a, b) => a + b;

// const addOne = a => a + 1; // if single argument, not parentheses needed

// const addRandom = () => 1 + 2; // empty argument example

// console.log(summarizeUser(fname, age, hasHobbies));
// console.log(add(1, 2));
// console.log(addOne(1));
// console.log(addRandom());

// const person = {
//     name: 'Max', 
//     age: 29, 
//     greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// };

//console.log(person);
//person.greet();

// const copiedPerson = {...person};
// console.log(copiedPerson);

// const hobbies = ['Sports', 'Cooking'];
// const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// // hobbies.push('Programming');
// // console.log(hobbies);
// // const copiedArray = hobbies.slice();
// const copiedArray = [...hobbies]; // ... Spread operator - pulls out all elements or properties and add them to what surrounds the operator - in this case, brackets
// console.log(copiedArray);

// const toArray = (...args) => { // ... Rest operator - used to merge multiple arguments. Type of use defines whether spread or rest.
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));

// const printName = (personData) => {
//     console.log(personData.name);
// }
// or use destructuring syntax:
// const printName = ({ name }) => {
//     console.log(name);
// }

// printName(person);

// const { name, age } = person; 
// console.log(name, age);

// Async Code

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');