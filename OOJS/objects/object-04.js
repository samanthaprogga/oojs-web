/*
  The factory pattern

  The factory pattern is a well-known design pattern used in software
  engineering to adstract away the process of creating specific objects
*/

'use strict';

const newEmployee = function(firstName, lastName, email, startDate) {
  const employee ={
    firstName: firstName,
    lastName: lastName,
    email: email,
    startDate: startDate,
    getName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
  }
  return employee ;
}

const saad = newEmployee(
    'Saad', 'Bond', 'saad-bond@gmail.com',new Date(2005, 0, 12)
);
console.log(saad.email)cd 
console.log(saad.dateOfBirth.toDateString());
localStorage