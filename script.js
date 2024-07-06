let pin = document.querySelector('.pin')
let go = document.getElementById('go')

let zero = document.getElementById('zero')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')

function show(value) {
  return () => {
    if (pin.innerHTML.length < 4) {
      pin.insertAdjacentHTML('beforeend', value)
    }
  }
}

zero.onclick = show(0)
one.onclick = show(1)
two.onclick = show(2)
three.onclick = show(3)
four.onclick = show(4)
five.onclick = show(5)
six.onclick = show(6)
seven.onclick = show(7)
eight.onclick = show(8)
nine.onclick = show(9)

function ection() {
  return () => {
    if (pin.innerHTML === '0711') {
      let lock = document.querySelector('.lock-outside')
      lock.style.transform = 'rotate(0)'
      lock.style.transition = 'all ease 1s'
      let thif = document.querySelector('.thif')
      thif.style.marginLeft = '600px'
      pin.style.background = '#5EBB63'
    } else {
      pin.style.background = 'red'
    }
  }
}
go.onclick = ection()

let back = document.getElementById('back')
back.onclick = () => {
  history.go(0)
}

let message = document.getElementById('love-message')
message.onclick = () => {
  var audio = new Audio('music.mp4')
  audio.play()
  // window.location.href = 'card.html'
  // message.style.opacity = '0'
  // message.style.transition = '3s all'
}
