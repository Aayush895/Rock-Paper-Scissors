const parentContainer = document.getElementById('parent-container')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')

const elementArr = []

for (const child of parentContainer.children) {
  elementArr.push(child.getAttribute('id'))
}

const elementArrLength = elementArr.length
function generateRandomElement(maxElement) {
  return Math.floor(Math.random() * maxElement)
}

function getCompChoice() {
  const randomElement = generateRandomElement(elementArrLength)
  console.log(elementArr[randomElement])

  // Manipulate the parent container and instead show the choices and who won
  parentContainer.innerHTML = ` 
  <div id="result-container">

    <div id="human-choice">
      <h4>YOU PICKED</h4>
      <!-- Place the pick human chose through js -->
      <div class="rock">
        <img src="assets/rock.png" alt="rock">
      </div>
    </div>

    <div id="declared-result">
      <h2>YOUR WIN <span>AGAINST PC</span></h2>
      <button>PLAY AGAIN</button>
    </div>

    <div id="pc-choice">
      <h4>PC PICKED</h4>
      <!-- Place the pick pc chose through js -->
      <div class=${elementArr[randomElement]}>
        <img src="assets/${elementArr[randomElement]}.png" alt=${elementArr[randomElement]}>
      </div>
    </div>

  </div>`
}

rock.addEventListener('click', getCompChoice)
paper.addEventListener('click', getCompChoice)
scissor.addEventListener('click', getCompChoice)
