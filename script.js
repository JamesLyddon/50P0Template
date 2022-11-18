// bring in individual elements by ID
const container = document.getElementById('container')
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
// get node list of all circle elemenr
const circles = document.querySelectorAll('.circle')

// track current active circle
let currentActive = 1

// increment active
next.addEventListener('click', () => {
  currentActive++
  // don't allow over number of elements in node list
  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

// decrement active
prev.addEventListener('click', () => {
  currentActive--
  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

//
function update() {
  console.log(currentActive)
  // add remove active class based on index of circle (starts at 0) vs currentActive (starts at 1)
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // get all active circles
  const activeCircles = document.querySelectorAll('.active')
  // alter style of element with class .progress (imported at top)
  // use concatenation to make a string value with as a percentage
  progress.style.width = (activeCircles.length - 1) * 33.3 + '%'

  if (currentActive == 1) {
    prev.disabled = true
  } else if (currentActive == circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
