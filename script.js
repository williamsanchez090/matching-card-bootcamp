Array.from(document.querySelectorAll('div')).forEach(div =>
  div.addEventListener('click', flipCard)
)

let images = [
  'plains',
  'plains',
  'island',
  'island',
  'mountain',
  'mountain',
  'swamp',
  'swamp',
  'forest',
  'forest',
  'summer',
  'summer',
]
const answers = {
  cardOne: '',
  cardTwo: '',
  cardThree: '',
  cardFour: '',
  cardFive: '',
  cardSix: '',
  cardSeven: '',
  cardEight: '',
  cardNine: '',
  cardTen: '',
  cardEleven: '',
  cardTwelve: '',
}
Object.keys(answers).forEach(card => {
  let imageIdx = Math.floor(Math.random() * images.length)
  answers[card] = images[imageIdx]
  images = images.filter((image, i) => i !== imageIdx)
  console.log(images)
})

console.log(answers)
// 0.5 * Math.random()/

let flipped = []
// flipped.forEach(div =>
//     div.removeEventListener('click', flipCard))
// let dontClick = false
// let dontDouble = ''
function flipCard(event) {
  // if (dontClick) return
  // if(dontDouble === event.target.id) return
  // dontDouble = event.target.id
  console.log(event.target.id)
  if (!event.target.classList.contains('faceDown')) {
    // event.target.classList.add('faceDown')
    // event.target.classList.remove(answers[event.target.id])
    return
  } else {
    event.target.classList.remove('faceDown')
    event.target.classList.add(answers[event.target.id])
  }
  // dontClick = true
  // setTimeout(() => {dontClick = false},100)
  flipped.push(answers[event.target.id])
  if (flipped.length === 2) {
    setTimeout(checkMatch, 250)
  }
}

function checkMatch() {
  if (flipped[0] === flipped[1]) {
    Array.from(document.getElementsByClassName(flipped[0])).forEach(div =>
      div.removeEventListener('click', flipCard)
    )
  } else {
    flipped.forEach(flippedUp => {
      document.getElementsByClassName(flippedUp)[0].classList = ['faceDown']
    })
  }
  flipped = []
}
function refresh(){
  window.location.reload("Refresh")
}