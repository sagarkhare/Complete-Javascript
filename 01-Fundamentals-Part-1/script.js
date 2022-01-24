// let js = 'amazing';
// // if (js === 'amazing'){
// //     alert('Javascript is FUN !')
// // }

// console.log(40+20+59) ;

//Challenge 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn 
    ? `Mark has greater BMI ${BMIMark}`
    : `John has greater BMI ${BMIJohn}`;

    console.log(markHigherBMI);