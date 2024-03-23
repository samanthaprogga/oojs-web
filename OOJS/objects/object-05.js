/* 
  function constructor pattern (old approach)
*/

'use strict';
 const Employee = function(name, dateOfBirth, email) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.email= email;
 }

 const navjot = new employee(
    'Navjot Kaur',new Date(2001, 3, 2), 'navjot@gmail.com'
    );
    console.log(navjot.dateOfBirth.dateOfBirth());

    // Class (blueprint) -> objects/ instances of that class
    // JS is not a classic/traditional OOP language
    // Is JS an OOP language: YES!