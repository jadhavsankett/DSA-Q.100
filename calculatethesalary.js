// write the program to the calculate the as per the following code 

const prompt = require('prompt-sync')();

let gender = prompt('Enter your gender (Male/Female): ').trim().toLowerCase();
let yearsOfService = Number(prompt('Enter your years of service: '));
let qualification = prompt('Enter your qualification (Post-Graduate or Graduate): ').trim().toLowerCase();

console.log(`Gender: ${gender}`);
console.log(`Years of Service: ${yearsOfService}`);
console.log(`Qualification: ${qualification}`);

if (gender === 'male') {
    if (yearsOfService >= 10) {
        if (qualification === 'post-graduate') {
            console.log('Your salary is ₹15000');
        } else if (qualification === 'graduate') {
            console.log('Your salary is ₹10000');
        }
    } else {
        if (qualification === 'post-graduate') {
            console.log('Your salary is ₹10000');
        } else if (qualification === 'graduate') {
            console.log('Your salary is ₹7000');
        }
    }
} else if (gender === 'female') {
    if (yearsOfService >= 10) {
        if (qualification === 'post-graduate') {
            console.log('Your salary is ₹12000');
        } else if (qualification === 'graduate') {
            console.log('Your salary is ₹9000');
        }
    } else {
        if (qualification === 'post-graduate') {
            console.log('Your salary is ₹10000');
        } else if (qualification === 'graduate') {
            console.log('Your salary is ₹6000');
        }
    }
} else {
    console.log('Invalid gender entered. Please enter "Male" or "Female". 😔');
}
