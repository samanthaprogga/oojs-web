'use strict'

const animal ={ 
    name:'domastic car',
    species: 'felis catus'
    class: 'mammalia'
};

console.table(animal);

// Basic validation
if(animal.hasOwnProperty('class')) {
    delete animal.class;
}
console.table(animal);
