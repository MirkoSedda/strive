/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
console.log('\n ----------- Functions -----------')
console.log('\n Exercise 1')
console.log(
  '\n Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.'
)
const rectangleArea = (l1, l2) => l1 * l2
console.log(rectangleArea(2, 4))

console.log('\n Exercise 2')
console.log(
  '\n Write a function called "crazySum" which receives two integers as parameters. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.'
)

const crazySum = (num1, num2) =>
  num1 === num2 ? (num1 + num2) * 3 : num1 + num2

console.log(crazySum(3, 3))
console.log(crazySum(3, 4))

console.log('\n Exercise 3')
console.log(
  '\n Write a function called "crazyDiff" that computes the absolute difference between a given number and 19. It should return triple their absolute difference if the given number is greater than 19.'
)

const crazyDiff = (num1, num2) => {
  const difference = num1 - num2
  const absoluteDifference = difference < 0 ? difference * -1 : difference
  const result =
    absoluteDifference > 19 ? absoluteDifference * 3 : absoluteDifference // se non assegno absDiff a una variabile logga 20..
  return result
}
console.log(crazyDiff(-15, 0))

console.log('\n Exercise 4')
console.log(
  '\n "Write a function called -boundary- which accept an integer parameter n and returns true if n is within 20 and 100 (included) or if n its equal to 400.'
)

const boundary = n => ((n >= 20 && n <= 100) || n === 400 ? true : false)
console.log(boundary(20))
console.log(boundary(5))

console.log('\n Exercise 5')
console.log(
  '\n Write a function called "strivify" which accepts a string as a parameter. It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.'
)

const strivify = (str, word) => (str[0] === word[0] ? str : `${word} ${str}`)

console.log(strivify('Strive is awesome', 'Strive'))
console.log(strivify('Daniele is awesome', 'Strive'))

console.log('\n Exercise 6')
console.log(
  '\n Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 or a multiple of 7.'
)

const check3and7 = n => {
  const multiple =
    n <= 0
      ? 'Please provide a positive number'
      : n % 3 === 0
      ? `${n} is a multiple of 3`
      : n % 7 === 0
      ? `${n} is a multiple of 7`
      : `${n} is not a multiple of 7 or 3`
  return multiple
}
console.log(check3and7(-1))
console.log(check3and7(3))
console.log(check3and7(7))
console.log(check3and7(5))

console.log('\n Exercise 7')
console.log(
  '\n Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS)'
)

const reverseString = str => {
  let reversedStr = ''
  for (i = str.length - 1; i > -1; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}
console.log(reverseString('Strive'))
console.log(
  reverseString(
    'I cant even understand why my solution works, but hey, it works lol'
  )
)

console.log('\n Exercise 8')
console.log(
  '\n Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a parameter.'
)

/*const upperFirst = str => {
  let uppered = ''
  for (i = 0; i < str.length + 1; i++) {
    str[i - 1] === ' ' ? (uppered += str[i].toUppercase) : (uppered += str[i])
  }
  return uppered
}
console.log(upperFirst('let me see if this algo works lol'))*/
const upperFirst = str => {
  let words = str.split(' ')
  let uppered = []
  for (let i = 0; i < words.length; i++) {
    uppered.push(words[i][0].toUpperCase() + words[i].substr(1))
  }
  return uppered.join(' ')
}
console.log(upperFirst('let me see if this algo works lol'))

console.log('\n Exercise 9')
console.log(
  '\n Write a function called "cutString" which creates a new string without the first and last character of a given string passed as a parameter.'
)

const cutString = str => {
  let arrStr = str.split(' ').reverse()
  let firstCut = []
  let secondCut = []
  for (let i = 0; i < arrStr.length; i++) {
    firstCut.push(arrStr[i][0].shift)
  }
  return firstCut
}
console.log(cutString('i am a cutting string tool'))

console.log('\n Exercise 10')
console.log(
  '\n  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.'
)

const giveMeRandom = n => {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }
  return arr
}
console.log(giveMeRandom(10))
const randomNumbers = giveMeRandom(10)

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/

console.log('\n Exercise Extra 1')
console.log(
  '\n  Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.'
)
const checkArray = randomNumbers => {
  for (let i = 0; i < randomNumbers.length - 1; i++) {
    randomNumbers[i] < 5
      ? console.log(`${randomNumbers[i]} is smaller than 5`)
      : console.log(`${randomNumbers[i]} is bigger than 5`)
  }
}
console.log(checkArray(randomNumbers), randomNumbers.length)
/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/
