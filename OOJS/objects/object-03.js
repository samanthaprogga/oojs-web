'use trict';

const employee ={
    firstName:'Martin',
    lastName:  'Panov',
    email:'martin.panov@gmail.com',
    bonus: {117, 109, 174, 112, 108, 129, 120},
    getTotalBonus: function(){
        let total = this.bonus.reduce((ac,el)) => ac + el, 0);
        return total;
    }
    // I don't have a toStribg method ... but my parent object does
};

console.log(
    `$(employee.firstName)'s total bonus: ${employee.getTotalBonus() }`
    );
    // for..in ->objects
    // for..of -> literable stuff0arrays,nodeList..)
for (let prop in employee) {
    console.log(typeof employee[prop])
}