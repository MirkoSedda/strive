/*ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)*/

/* EXERCISE 1
   Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.*/

/*  The first data type are strings: its enclosed in "" and contains text or numbers in text format.
    Second data type are numbers and they are, well, numbers, which can use to do math or enumerate things.
    Third very important data type are booleans and they just True or False: they can be used to compare 2 values.
    Fourth data type is undefined: when a variable get declared using var, let or const but is value is not defined immediately.
    Fifth data type is null: it is used to explicitly say that we dont want to assign now a data type or value to a variable, but just to assign it the value of empty and get it ready for later use.
    Sixth data type are arrays, which is collection of all the previous data types, encapsulated in [] brackets.
    Seventh data type are objects which are a collection of key-value pairs and are encapsulated in {} brackets.*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.*/

/* A variable is a piece of our computer memory in which we can to store data types and values.
   They can be filled immediately with a value or can be just declared and left undefined or they can be assigned with the value of null for later use. */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.*/

/* let sum = 12 + 20 */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.*/

/* let x = 12 */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".*/

/* let name = "John Doe" */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).*/

/* let subtraction = 12 - x */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).*/

/*let name1 = 'john'
let name2 = 'John'
let checkNames = name1 === name2
let bruteForceNames = name1 === name2.toLowerCase()
console.log(checkNames, bruteForceNames)*/

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).*/

/*let x = 3
let spellNumber =
  x === 1
    ? 'one'
    : x === 2
    ? 'two'
    : x === 3
    ? 'three'
    : x === 4
    ? 'four'
    : x === 5
    ? 'five'
    : x === 6
    ? 'six'
    : x === 7
    ? 'seven'
    : x === 8
    ? 'eight'
    : x === 9
    ? 'nine'
    : null
console.log(spellNumber)*/

/* EXERCISE 9
 Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)*/

/*let truthy = true
let falsy = false
let isTruthy = truthy ? true : false
console.log(isTruthy)*/

/* EXTRA 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.*/

/*isMale = false
let gender = isMale === true ? 'male' : 'female'
console.log(gender)*/

/* EXTRA 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.*/

/*let num1 = 1
let num2 = 7
let add = num1 + num2
let subtraction = num1 - num2
let isEqualToEight =
  num1 === 8
    ? true
    : num2 === 8
    ? true
    : add === 8
    ? true
    : subtraction === 8
    ? true
    : false
console.log(isEqualToEight)*/

/* EXTRA 3
 Create a variable and assign to it the concatenation of two strings.*/

/* let stringConcatenated = 'rock' + '&roll'*/

/* EXTRA 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.*/

/*let a = 3
let b = 9
let c = 1
let minNumber = a < b ? a : b < c ? b : c < a ? c : null
let maxNumber = a > b ? a : b > c ? b : c > a ? c : null
let midNumber = a + b + c - minNumber - maxNumber
console.log(minNumber, midNumber, maxNumber) /*

/* EXTRA 5
 Write a piece of code for finding the average of two given integers.
*/

/*let num1 = 7
let num2 = 3
let averageInteger = parseInt(num1 / num2)
let averageFloat = parseFloat(num1 / num2)
console.log(averageInteger, averageFloat)*/

/* EXTRA 6
 Write a piece of code for finding the longest of two given strings.
*/

/*str1 = 'wekfhasdkjfhasdflkasjdfl'
str2 = 'asdjkhfalsdjghaflkghadfkghalkgadfhglkhfk'
let longestString = str1.length > str2.length ? str1 : str2
console.log(longestString)*/

/* EXTRA 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/*let num = 7.7
let isInteger = num === parseInt(num) ? true : false
console.log(isInteger)*/

/* EXTRA 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/*let num = 400
let percentage = 20
let k = percentage / 100
let result = num * k
console.log(result)*/

/* EXTRA 9
 Write a piece of code for checking if a given number is even or odd.
*/

/*let num = 6
let modulo = num % 2 === 0 ? true : false
console.log(modulo)*/
