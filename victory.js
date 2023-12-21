const rulesContainer = document.getElementById('rules-container')
const victoryPage = document.getElementById('victory-page')
const resetButton = document.getElementById('reset')
const crossButton = document.querySelector('.cross')
const rulesButton = document.getElementById('rules')

rulesButton.addEventListener('click', () => {
  rulesContainer.style.display = 'block'
})

crossButton.addEventListener('click', () => {
  rulesContainer.style.display = 'none'
})

resetButton.addEventListener('click', () => {
  window.location.href = 'index.html'
})