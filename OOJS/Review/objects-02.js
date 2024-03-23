'Use strict'

// The mother of all objects...Object
// All objects ,one way or another, Inherit properties from object

const customer = {
    id: 'CS479033',
    name: 'Anothony Jones',
    email: 'tony47@email.com',

};

// Check is custoner have a specific property using the hasOwnProperty() method
console.log(customer.hasOwnProperty('name') // true

// Check a specific property is enumerable using the 'in' operator
console.log('toString' 'id' in customer); //  true

// Loop through the object's properties using the for..in loop
for (let key in customer) {
    console.log(`${key}: ${customer[key]}`);
}

/* Output will be :
   toString: f toString()
   id: CS47903

// Difference between the for..of and for..in(?)

// Freezing an object -> immutable. What if you want a single immutable property?
const employee = {}

object.defineProperty(*employee,
    'type', {
        value: 'immutable',
        enumerable: true
    }
    );
// We can use the defineProperty()method to make one or more properties
// immutable and/or nonemurable (hidden when you print the object)
// defineProperty