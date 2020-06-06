// Javsascript controls behavior/interactivity of an html page

// resources
// - https://developer.mozilla.org/en-US/
// - https://developer.mozilla.org/en-US/docs/Learn
// - https://www.w3schools.com/js/default.asp


/**
 * Data Types - Ways information is stored the browser/computer
 */

'I am a string!' // Strings - store any text
33 // Integers - Store numbers with no decimal
33.01 // Float - Store numbers WITH decimal

// Boolean - Used to store wether something is true or false
//      in order to make a decision
true
false

['Hello', 'World'] // Arrays - Store lists of data

// Objects - store structured data with key/value pairs
var myFirstObject = {
  'hello': 1,
  'world': 2.0,
  'aString': 'iAmAString!',
  // Pay attention here - numbers can be stores as strings
  // You can use certain functions to change them from a string to a number
  'lotsOfStrings': ['1', '2', '3']
};


/**
 * Variables - Can store and hold data types listed above
 */

// Original way of making variables
var myFirstVariable = '1';

// Newer way of making variables
let mySecondVariable = '2';

// Use const if storing data you don't want to change
// Remember: You can still add/remove to arrays/objects
const myUnchangingVariable = 'you cannot change this';


/**
 * Arrays - Using/working with arrays
 */

const myFirstArray = ['1', '2'];

// Add to the end of an array
myFirstArray.push('3');

// ['1', '2', '3']
console.log(myFirstArray);

// Remove and store the last item from an array
const lastItemInTheArray = myFirstArray.pop();

// '3'
console.log(lastItemInTheArray);


/**
 * Object - Store data with key/value pairs
 */

const theObject = {
  'my': 'object',
  'is': 'cool'
}


/**
 * Loops - Interate over data
 */

// Lets loop over some data and print it out in the console

// Postions:      0      1
const myData = ['my', 'data']; // Example data

// Each section is separated by a semi-colon

// First part: stores what iteration the loop is on
//  Remember: Counting in computers starts at 0

// Second part: Condition that tells for loop to stop or continue

// Third part: Increment Expression - increase the iterable by one each time a loop occurs

// This will loop over the myData array and console log the data to the terminal
// 'my'
// 'data'
for (let position = 0; position < myData.length; position++) {
  console.log(myData[i])
}

/**
 * Functions - Reusuable pieces of code
 */

function myFirstFunction () {
  console.log('hello world!');
}

// returns 2
function mySecondFunction () {
  return 1 + 1;
}

// Creates a function that returns adding two numbers;
// NOTE: Be careful!  This function does not check data types
//      so if you passed in strings '1' and '2' it would
//      concatenate the numbers into the string of '12'
//      But if you passed in numbers 1 and 2 it would return 3
function addTwoNumbers (numOne, numTwo) {
  return numOne, numTwo;
}

const myNumbers1 = addTwoNumbers('1', '2'); // '12'
const myNumbers2 = addTwoNumbers(1, 2); // 3


// AJAX - Getting data from a web server
// Will go over later as needed