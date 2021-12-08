/*console.log('\n ----------- Functions -----------')
console.log('\n Exercise 1')
console.log('\n Create a variable called test and assign a string value to it.')


console.log('\n Exercise 2')
console.log(
  '\n Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.'
)
const a = 10
const b = 20
const sum = a + b
console.log(sum)

console.log('\n Exercise 3')
console.log(
  '\n  Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution'
)


console.log('\n Exercise 4')
console.log(
  '\n Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.'
)


console.log('\n Exercise 5')
console.log(
  '\n Write a piece of code for programmatically removing the age property from the previously create object.'
)


console.log('\n Exercise 6')
console.log(
  '\n Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.'
)



console.log('\n Exercise 7')
console.log(
  '\n Write a piece of code for programmatically removing the last skill from the skills array inside the me object.'
)


// JS Functions

console.log('\n Exercise 8')
console.log(
  '\n  Write a function called dice; it should randomize an integer number between 1 and 6.'
)

console.log('\n Exercise 9')
console.log(
  '\n  Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one'
)



console.log('\n Exercise 10')
console.log(
  '\n  Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string. Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]'
)



console.log('\n Exercise 11')
console.log(
  '\n  Write a function called deleteOne which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.'
)



console.log('\n Exercise 11')
console.log(
  '\n  Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits. Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"'
)



let strive = 'i love coding 32 hzrje 432 df 4  6 7 8 9 kukug'

/*const onlyLetters = function () {
  let striveLetters = ' '
  for (i = 0; i < strive.length; i++) {
    // console.log(typeof parseInt("aosduhifasio"))

    if (!Number.isSafeInteger(parseInt(strive[i]))) striveLetters += strive[i]
  }
  return striveLetters
}

console.log(typeof NaN)
console.log(onlyLetters(strive))
*/
/*
console.log('\n Exercise 12')
console.log(
  '\n  Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.'
)

const isThisAnEmail = emailAddress => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (emailAddress.match(regexEmail)) {
    return true
  } else {
    return false
  }
}
console.log(isThisAnEmail('kunay69@hotmail.it'))

console.log('\n Exercise 13')
console.log(
  '\n  Write a function called whatDayIsIt that should return the current day of the week.'
)

const whatDayIsIt = () => {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const today = new Date()
  let day = weekDay[today.getDay()]
  console.log(day)
}
*/
/* EXERCISE 14
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
/*
console.log('\n Exercise 14')
console.log(
  '\n   Write a function called rollTheDices which receives a number as a parameter. It should invoke the dice() function defined in Ex1 the specified amount of times, and return an object containing a sum property holding the sum of all values extracted and a values array containing the single values of the dicerolls themselves. Example: RollTheDices(3) => returns { sum: 10 values: [3, 3, 4]} '
)

const rollTheDices = num => {
  let result = []
  const dice = Math.floor(Math.random() * 7)
  for (let i = 0; i < num; i++) {
    result.push(dice)
  }
}
console.log(rollTheDices(3))

console.log('\n Exercise 15')
console.log(
  '\n  Write a function called isTodayMyBirthday which should return true if today s your birthday, false otherwise.'
)

const isTodayMyBirthday = () => {
  let birthday = new Date('1986-04-04')
  let today = new Date()
  console.log(today)
}
// JS Arrays & Objects

console.log('\n Exercise 16')
console.log(
  '\n  Write a function called deleteProp which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.'
)
const deleteProp = (obj, string) => {
  return delete obj.string
}
console.log(deleteProp({ name: 'Mirko', surname: 'Sedda' }, 'surname'))
*/

console.log('\n Exercise 17')
console.log(
  '\n  Write a function called oldestMovie which finds the oldest movie in the provided movies array.'
)

const oldestMovie = movies => {
  let arr = [0]
  let movie = []
  for (let i = 0; i < movies.length; i++) {
    let year = parseInt(movies[i].Year)
    if (year > arr) {
      arr.push(parseInt(movies[i].Year))
      movie.push(movies[i])
    }
    return movie
  }
}

console.log(oldestMovie(movies))

console.log('\n Exercise 18')
console.log(
  '\n  Write a function called countMovies which returns the number of movies contained in the provided movies array.'
)

const countMovies = arr => arr.length
console.log(countMovies(movies))*/