'use strict'

const personOne = {
    name: 'Mary' ,
    age:'34',
    pet:'cat',
}
const personTwo = {
    name:'Steven',
    age:'29',
    pet:'dog'
};

const personThree = {
    name:'Joy',
    age:'21',
    pet: 'otter'
};

// How can I loop thriugh 3 objects at the same time? Using one 'for..of'
for (const data of [personOne, personTwo, personThree]){
console.log(``)])