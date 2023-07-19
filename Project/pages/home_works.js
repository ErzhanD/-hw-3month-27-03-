// Задание 1

function validEmail(email) {
  const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
  return regExp.test(email)
}

const email = "account@gmail.com"
if (validEmail(email)) {
  console.log("Gmail указан правильно")
} else {
  console.log("Gmail указан не првильно")
}

// Задание 2

const parent_block = document.getElementById('parent_block')
const child_block = document.getElementById('child_block')

function moveSmallBlock(position) {
child_block.style.left = position + "px"

if (position < parent_block.offsetWidth - child_block.offsetWidth) {
  movementPeriod(() => moveChildBlock(position + 1))
}
}

moveSmallBlock(0)