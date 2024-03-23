'use strict'

// Object destructuring 

const person = {
    firstName: 'Jack',
    lastName:'Sparrow',
    age: 43
};

let { firstName, lastName, age} = person;

console.log(firstName, lastName, age );

const employess ={
    fullName : 'Jemery Joner',
    age:'32',
    position: {
       title:  "Software Engineer",
       startdate: new Date(2022, 4, 12)
    }
};
    address: {
        streetName:'Notre Dame Ave',
        streetNumber: 346,
        unit: 12,
        postalCode: 'R3B 76H'
    }


let {fullName, age, positions: {title, startDate} } = employee;
console.log(fullName, age, title, startDate.toString());

//s