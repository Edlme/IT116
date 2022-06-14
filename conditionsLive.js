// This prints Hello World in the console window
console.log("Hello World");

// Declaring a variable
// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 
let randomNumber = Math.random();
//This prints the random number on the console window
console.log(randomNumber); 
// We use if to specify a block of code to be executed, if a specified condition is true
if (randomNumber < 0.5) {
// This prints Hello Edlawit and the random number if it is less than 0.5
    console.log("Hello Edlawit");
    console.log(randomNumber);

}
// If the random number is equal to or above 0.5, then Random Number is greater than 0.5 and the random number will be displayed in the console window
if (randomNumber >= 0.5) {

    console.log('Random Number is greater than 0.5');
    console.log(randomNumber);

}

// This is an if else statement
// Variables defined with const cannot be Redeclared
const dayOfWeek = 'Monday';
// Strict equality compares two values for equality by checking even thier data type
if (dayOfWeek === 'Monday') {

    console.log('This is Monday');

} else if (dayOfWeek === 'Thursday') {

    console.log("This is Thursday");

} else if (dayOfWeek ===  'Saturday') {

    console.log("Hooray, today is Saturday");
}

// The prompt function will ask the users to enter thier age
const age = prompt('ENTER AN AGE');
// const age = 8;
//
if (age < 5) {
    console.log("You Type Pretty Fast - 5 ");
} else if (age < 10) {
    console.log("Output of the logic compared to CASE STATEMENTS");
} else if (age < 35) {
    console.log("Output of the logic Mr Adult.");
}
// ELSE -- ALL ALL CONDITIONS IN THE LOGIC HAVE FAILED
// ELSE runs when all coditions in the logic have falied
else {

    console.log("Last Resort If All Conditons Fail");
} 

// declaring a variable
const expr = 'Papayas';

switch (age) {

    case 'Oranges':
        console.log("Oranges are $0.59 a pound");
        break;    
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    case 'Papayas':
        console.log("Hello Papayas");
        break;
    default:
        console.log("Sorry, we are out of your asked item.");

}

const password = prompt("Please Enter A New Password");

if (password.length >= 6) {

    //This is Nested Condition that checks for the validity of a passoword that the end user enters
    if (password.indexOf(' ') === -1) {

        console.log("Valid Password")
    }else {
        console.log("Password Can't Have Spaces")
    }

} else {

    console.log("Password is Too Short")
}
// Calling a function multiple times to get repeated returns
function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singSong()
singSong()
singSong()

function greet(firstName) {
// Templete literal
// The templete literal appends Hey There to the first name

    console.log(`Hey There, ${firstName}`)
}

greet('Edlawit')
// The function will display the first name and the intial letter of the last name by appending Hey There.
function greet1(firstName,lastName) {
    console.log(`Hey There, ${firstName} ${lastName[0]}.`)
}

greet1('Edlawit','Girma')