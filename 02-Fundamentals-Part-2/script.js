'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriverLicense) console.log('yes you can drive');

// function calcAge(birthYear){
//     const age = 2022-birthYear;
//     return age;
// }

// const a = calcAge(1999);
// console.log(a); 

const year = 1999;
const jonas = {
    firstName: "sagar",
    lastName: "khare",
    year: 2000,
    job: "student",
    friends: ['a','b','c'],
    license: true,

    calcAge: function (){
        return (2022-this.year);
    }   
}

// const calcAge = function (year)  {
//     return (2022-year);
// }

console.log(jonas.calcAge());
if(20===19){console.log("abv")}