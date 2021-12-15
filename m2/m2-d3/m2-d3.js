let listItems = document.getElementsByTagName('li')

secondInputRef = document.getElementById('secondInput')

let defaultColor = '#0000ff'

window.addEventListener('load', startup, false)

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
