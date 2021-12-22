/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/
console.log('\n ----------- Objects -----------')
console.log('\n Exercise 1')
console.log(
  '\n Create a variable and assign to it an array containing the first 5 positive numbers.'
)
console.log('\n ')
let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log('\n ')
console.log('\n Exercise 2')
console.log(
  '\n Create a variable and assign to it an object containing your name, surname, email address and age.'
)
console.log('\n ')
let obj = {
  name: 'Mirko',
  surname: 'Sedda',
  emailAddress: 'kunay69@hotmail.it',
  age: 35,
}
console.log(obj)
console.log('\n ')

console.log('\n Exercise 3')
console.log(
  '\n Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.'
)
console.log('\n ')
console.log((obj.hasDrivingLicense = true))
console.log(obj)

console.log('\n Exercise 4')
console.log('\n  Remove from the previously created object the age property..')
console.log('\n ')

delete obj.age
console.log(obj)

console.log('\n Exercise 5')
console.log(
  '\n  Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.'
)
console.log('\n ')
let obj2 = {
  name: 'Daniele',
  surname: 'Banovaz',
  emailAddress: 'DanieleBanovaz@striveschool.com',
  age: 30,
}
console.log(obj)
console.log(obj2)
let hasSameEmailAddress = obj.emailAddress === obj2.emailAddress
console.log(hasSameEmailAddress)

console.log('\n Exercise 6')
console.log(
  "You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping otherwise it costs 10 Write an algorithm that calculates the total cost to charge the user with."
)
console.log('\n ')
let shoppingCart1 = 50
let shippingCost = 10
let invoice1 = shoppingCart1 <= 50 ? shoppingCart1 : shoppingCart1 + 10
console.log(invoice1)
let shoppingCart2 = 51
let invoice2 = shoppingCart2 <= 50 ? shoppingCart2 : shoppingCart2 + 10
console.log(invoice2)

console.log('\n Exercise 7')
console.log(
  'You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase Modify the previous answer inserting this information and applying the same rules for the shipping cost  calculate the totalCost.'
)
console.log('\n ')
let blackFriday = 0.8
let shoppingCart3 = 50 * blackFriday
let invoice3 = shoppingCart3 <= 50 ? shoppingCart3 : shoppingCart3 + 10
console.log(invoice3)
let shoppingCart4 = 100 * blackFriday
let invoice4 = shoppingCart4 <= 50 ? shoppingCart4 : shoppingCart4 + 10
console.log(invoice4)

console.log('\n Exercise 8')
console.log(
  'Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate. Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.'
)
console.log('\n ')

let car1 = {
  brand: 'lamborghini',
  model: 'aventador',
  licensePlate: 'a2gh46',
}

let car2 = {}
Object.assign(car2, car1)
car2.licensePlate = 'b3kjf'

let car3 = {}
Object.assign(car3, car1)
car3.licensePlate = 'c5lkj'

let car4 = {}
Object.assign(car4, car1)
car4.licensePlate = 'd5kh'

let car5 = {}
Object.assign(car5, car1)
car5.licensePlate = 'e6jhl'

let car6 = {}
Object.assign(car6, car1)
car5.licensePlate = 'f5hk'

console.log(car1.licensePlate.licensePlateNumber)
console.log(car2.licensePlate.licensePlateNumber)
console.log(car3.licensePlate.licensePlateNumber)
console.log(car4.licensePlate.licensePlateNumber)
console.log(car5.licensePlate.licensePlateNumber)
console.log(car6.licensePlate.licensePlateNumber)

console.log('\n Exercise 9')
console.log(
  'Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.'
)
console.log('\n ')
let carsForRent = [car1, car2, car3, car4, car5, car6]
console.log(carsForRent)

console.log('\n Exercise 10')
console.log('Remove the first and the last car from the carsForRent array.')
console.log('\n ')

let notCrashedCars1 = carsForRent.pop(car6)
let notCrashedCars2 = carsForRent.splice(0, 1)
console.log(carsForRent)

console.log('\n Exercise 11')
console.log(
  'Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.'
)
console.log('\n ')
console.log(typeof car1)
console.log(typeof car1.licensePlate)
console.log(typeof car1.brand)

console.log('\n Exercise 12')
console.log(
  'Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it. Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.'
)
console.log('\n ')

let carsForSale = []
carsForSale.push(car1)
carsForSale.push(car2)
carsForSale.push(car3)
console.log(carsForSale)
let totalCars = carsForSale.length + carsForRent.length
console.log(totalCars)
/* EXERCISE 13
 
*/

console.log('\n Exercise 13')
console.log(
  'Using a loop, print to the console all the data for each car in the carsForSale array.'
)
console.log('\n ')

for (let i = 0; i <= carsForSale.length; i++) {
  //wtf?
  console.log(carsForSale)
}

/* EXTRA 1
 
*/

console.log('\n Exercise extra 1')
console.log(
  'Write a piece of code for reverting an array. es:[1, 3, 5] ==> [5, 3, 1]'
)
console.log('\n ')

let arr1 = [1, 3, 5]
let reverseArr = arr1.reverse()
console.log(reverseArr)

console.log('\n Exercise extra 2')
console.log(
  'Write a piece of code for getting the maximum numerical value from an array'
)
console.log('\n ')
let arr2 = [1, 3, 5]
let maxValue = Math.max(...arr2) // thx google 4 the syntax
console.log(maxValue)

console.log('\n Exercise extra 3')
console.log(
  'Write a piece of code for getting the minimum numerical value from an array'
)
console.log('\n ')
let arr3 = [1, 3, 5]
let minValue = Math.min(...arr3)
console.log(minValue)

console.log('\n Exercise extra 4')
console.log(
  'Write a piece of code for getting only even numerical values from an array'
)
console.log('\n ')
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let evenValues = []
for (i = 0; i < arr4.length; i++) {
  if (arr4[i] % 2 === 0) {
    evenValues.push(arr4[i])
  }
}
console.log(evenValues)

console.log('\n Exercise extra 5')
console.log(
  'Write a piece of code for deleting only even entries from an array.'
)
console.log('\n ')

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let oddValues = []
for (i = 0; i < arr5.length; i++) {
  if (arr5[i] % 2 !== 0) {
    oddValues.push(arr5[i])
  }
}
console.log(oddValues)

/***********ok i give up :( *******************/
console.log('\n Exercise extra 6')
console.log('Write a piece of code for removing all the vowels from a string.')
console.log('\n ')

let string1 = 'this exercise is very difficult!'
let characters = string1.split('')
let vowels = ['a', 'i', 'o', 'e', 'u', 'A', 'E', 'I', 'O', 'U']
let finalString = ''

for (i = 0; i < characters.length; i++) {
  // characters[i] === 'a'
  //  ? characters[i].push(vowelsContainer)
  //  : characters[i].push(finalString)

  if (vowels.indexOf(string1[i]) === -1) {
    finalString += string1[i]
  }
}
console.log(finalString)

console.log('\n Exercise extra 7')
console.log(
  'Write a piece of code for increasing all the numerical values in a array by 1.'
)
console.log('\n ')
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
let increasedNumbers = []
for (i = 0; i < arr6.length; i++) {
  let increaseByOne = arr6[i] + 1
  increasedNumbers.push(increaseByOne)
}
console.log(increasedNumbers)

console.log('\n Exercise extra 8')
console.log(
  'Replace all the strings contained in an array with their length. es.: ["strive", "is", "great"] => [6, 2, 5]'
)
console.log('\n ')

let string = [
  'strive',
  'is',
  'great',
  'and',
  'Daniele',
  'and',
  'luis',
  'are',
  'amazing',
]
let characterCount = []
for (i = 0; i < string.length; i++) {
  let length = string[i].length
  characterCount.push(length)
}
console.log(characterCount)
