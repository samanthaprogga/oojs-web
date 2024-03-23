'use strict';

//Adding functions to objects (method)

const person = new Object();
person.firstName = 'Eric';
person.lastName = 'Cartman';
person.dateOfBirth = new Date(1997, 11, 25);
person.getName = function() {
    return  `${this.firstName} ${this.lastName}`;
};

console.log{person.firstName};
console.log(`Welcome, ${person.getName()}!`); // Welcome, Eric Cartman

//Object literal systax
const employee = {
    firstName: 'John',
    lastName:  'Doe',
    dateOfBirth: new Date(1997, 3, 23),
    getName() {
        return `${this.firstName} ${this.lastName}`
    }
};