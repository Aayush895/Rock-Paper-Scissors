const parentContainer = document.getElementById('parent-container')
const scoreSection = document.getElementById('score-section')
const resultContainer = document.getElementById('result-container')
const rock = document.getElementById('rock').querySelector('img')
const paper = document.getElementById('paper').querySelector('img')
const scissor = document.getElementById('scissors').querySelector('img')
const declaredResult = document.getElementById('declared-result')
const playAgain = declaredResult.querySelector('button')
const rockChoice = document.querySelector('.rock')
const paperChoice = document.querySelector('.paper')
const scissorChoice = document.querySelector('.scissors')
const winOrlose = declaredResult.querySelector('h2').querySelector('span')
const nextButton = document.getElementById('next')
const rulesButton = document.getElementById('rules')
const crossButton = document.querySelector('.cross')
const rulesContainer = document.getElementById('rules-container')
const humanScoreDisplay = document
  .querySelector('.your-score')
  .querySelector('h1')
const pcScoreDisplay = document
  .querySelector('.computer-score')
  .querySelector('h1')

const victoryPage = document.getElementById('victory-page')
const resetButton = document.getElementById('reset')

let humanScore = 0
let computerScore = 0
const elementArr = []

for (const child of parentContainer.children) {
  elementArr.push(child.getAttribute('id'))
}

const elementArrLength = elementArr.length
function generateRandomElement(maxElement) {
  return Math.floor(Math.random() * maxElement)
}

function getCompChoice(e) {
  const randomElement = generateRandomElement(elementArrLength)

  parentContainer.style.display = 'none'
  resultContainer.style.display = 'flex'

  resultContainer.querySelector('#human-choice').innerHTML = `
        <h4>YOU PICKED</h4>
        <div class=${e.composedPath()[1].id}>
          <img src="assets/${e.composedPath()[1].id}.png" alt="${
    e.composedPath()[1].id
  }">
        </div>`

  resultContainer.querySelector('#pc-choice').innerHTML = `
      <h4>PC PICKED</h4>
      <div class=${elementArr[randomElement]}>
        <img src="assets/${elementArr[randomElement]}.png" alt=${elementArr[randomElement]}>
      </div>`

  if (
    e.composedPath()[1].id == 'rock' &&
    elementArr[randomElement] == 'scissors'
  ) {
    winOrlose.innerText = 'WIN'
    humanScore++
    humanScoreDisplay.innerText = `${humanScore}`
    nextButton.style.display = 'inline-block'
  } else if (
    e.composedPath()[1].id == 'rock' &&
    elementArr[randomElement] == 'paper'
  ) {
    winOrlose.innerText = 'LOST'
    computerScore++
    pcScoreDisplay.innerText = `${computerScore}`
    nextButton.style.display = 'none'
  } else if (
    e.composedPath()[1].id == 'paper' &&
    elementArr[randomElement] == 'scissors'
  ) {
    winOrlose.innerText = 'LOST'
    computerScore++
    pcScoreDisplay.innerText = `${computerScore}`
    nextButton.style.display = 'none'
  } else if (
    e.composedPath()[1].id == 'paper' &&
    elementArr[randomElement] == 'rock'
  ) {
    winOrlose.innerText = 'WIN'
    humanScore++
    humanScoreDisplay.innerText = `${humanScore}`
    nextButton.style.display = 'inline-block'
  } else if (
    e.composedPath()[1].id == 'scissors' &&
    elementArr[randomElement] == 'paper'
  ) {
    winOrlose.innerText = 'WIN'
    humanScore++
    humanScoreDisplay.innerText = `${humanScore}`
    nextButton.style.display = 'inline-block'
  } else if (
    e.composedPath()[1].id == 'scissors' &&
    elementArr[randomElement] == 'rock'
  ) {
    winOrlose.innerText = 'LOST'
    computerScore++
    pcScoreDisplay.innerText = `${computerScore}`
    nextButton.style.display = 'none'
  } else {
    winOrlose.innerText = 'TIED'
    nextButton.style.display = 'none'
  }
}

function resetPlayScreen() {
  parentContainer.style.display = 'grid'
  resultContainer.style.display = 'none'
}

function showWinnerPage() {
  window.location.href = 'index.html'
}

rock.addEventListener('click', getCompChoice)
paper.addEventListener('click', getCompChoice)
scissor.addEventListener('click', getCompChoice)

playAgain.addEventListener('click', resetPlayScreen)
rulesButton.addEventListener('click', () => {
  rulesContainer.style.display = 'block'
})

crossButton.addEventListener('click', () => {
  rulesContainer.style.display = 'none'
})

nextButton.addEventListener('click', showWinnerPage)

/**
 * JS stuff:
 *
 * Reset the screen when clicked on 'play again' button --> Done
 * On clicking the choices, js should display who won and who lost --> Done
 * On clicking the choices, js should update the counter if human won or if computer won --> Done
 * On clicking the rules button user should be able to view the rules and remove it if clicked on the cross button --> Done
 * If user wins, then a next button should be visible beside the rules button otherwise it should be invisible --> Done
 * If user clicks on the next button then they should be redirected towards a victory page
 *
 * CSS stuff:
 *
 * Have to add the rules and next button. --> Done
 * Have to create a victory page with some basic animations.
 *
 * Menial stuff:
 *
 * Remove all the comments and console.log
 *
 */
