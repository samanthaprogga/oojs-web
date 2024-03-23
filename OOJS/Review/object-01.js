/*


 ECMA=262 defines an object as an unordered collection of properties. Each 
 property or method is identified by a name that is mapped to a value

 let num = 10; ('num' contains '10', or 'num' is '10')
 const user = { name: 'John Smith'}; ('user' is not 'John Smith'. 'user' points
 to the object that contains 'name')


 > No knowledge is wasted. What you lean in JS can be used in C#,
 Python,etc.

 JS is not a traditional OOP language like Java or C# . JS doesn't have
 real classes , but objects that 'borrow' properties from other objects

 Prototype!
 */

 'use strict'

 // Creating and initializing an object
 // Object ;iteral syntax
 const student = {
    name: 'Saad',
    age: 20,
    couse : 'OOJS'
    languages : ['English', 'Arabic', 'French' 'Latin']
 };

 //Dot operator syntax
 const person = {};
 person.name = 34;

 //The objecr constructor
 const employee = new Object();
 employee.id = 12345;
 employee.name = 'Richard Johnson';

 // Key-value syntax (using strings as property names)
 // This systax allows you to set properties 'on the fly',since the property
 // name is stored as string

const company = {};
company ['name'] = 'Blue Fireworks';
employee.name = 'Richard Johnson';