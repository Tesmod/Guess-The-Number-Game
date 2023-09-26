let min = 1,
      max = 10,
      numbGuess = 3,
      mainNum = randomNum(min, max)


const input = document.querySelector('#user')
const valid = document.querySelector('#validate')
const message  = document.querySelector('.confirm')
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const display = document.querySelector('.display')

minNum.textContent = min
maxNum.textContent = max

display.addEventListener('mousedown', function(e) {
 if (e.target.className === 'play-again'){
    window.location.reload()
  }
})


valid.addEventListener('click', function () {
  let pick = parseInt(input.value)
  
  if (isNaN(pick) || pick < min || pick > max) {
    output(`Enter a number between ${min} and ${max}`, 'red')
  }

  if (pick === mainNum) {
    gameOver(true, `The number is ${mainNum}, you WIN!`)
  }
  else{
    numbGuess -= 1
  if (numbGuess === 0) {
      gameOver(false, `You have no chances left, The correct number is ${mainNum}` )
    }
    else{
      input.style.borderColor = 'red'
      output(`${pick} is not correct, You have ${numbGuess} guess(es) left`, 'red')
    }
  }
})
function randomNum(max, min) {
  return (Math.floor(Math.random() * (max - min + 1) + min))
}
  
function output(text, color) {
  message.style.color = color
  message.textContent = text
}

function gameOver(won, text) {
  let color
  won === true ? color = 'green' : color = 'red'
  input.style.borderColor = color
  output(text)
  message.style.color = color
  valid.value = 'Play Again'
  valid.className += 'play-again'
  input.disabled = true
}