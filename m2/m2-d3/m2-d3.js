//  MANDATORY JS EXERCISES (continue from yesterday's file for this exercise)
//     -- 1) Create two inputs for picking up colors in the page, and a button with "Apply Colors" as text
//     -- 2) Grab all <li> in the page from the DOM, and save them in a variable called "listItems"
//     -- 3) Grab the inputs references via DOM manipulation and save them in variables
//     4) Create a function and attach it to the "Apply Colors" button click event
//     5) Cycle listItems inside the function. Verify that the function and the loop work by logging in the console
//         each item from the loop every time the button gets clicked
//     6) Move the inputs references in the function. Use the first input value as background-color for the item, and the second one for the text color.

//     If you receive black as a color check where you have the inputs references.
//     You should now see the list-items color and background-color change at the click of the button.

let listItems = document.getElementsByTagName('li')

secondInputRef = document.getElementById('secondInput')

let defaultColor = '#0000ff'

//window.addEventListener('load', startup, false)

function updateFirst(event) {
  let p = document.querySelector('p')

  if (p) {
    p.style.color = event.target.value
  }
}

function updateAll(event) {
  document.querySelectorAll('p').forEach(function (p) {
    p.style.color = event.target.value
  })
}

function startup() {
  firstInputRef = document.getElementById('firstInputId')
  firstInputRef.value = defaultColor
  firstInputRef.addEventListener('input', updateFirst, false)
  firstInputRef.addEventListener('change', updateAll, false)
  firstInputRef.select()
  

  secondInputRef = document.getElementById('secondInputId')
  secondInputRef.value = defaultColor
  secondInputRef.addEventListener('input', updateFirst, false)
  secondInputRef.addEventListener('change', updateAll, false)
  secondInputRef.select()
}



function watchColorPicker(event) {
  document.querySelectorAll('p').forEach(function (p) {
    p.style.color = event.target.value
  })
}