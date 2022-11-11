//Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randomNumber = Math.round(Math.random()* 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', function(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    document.querySelector('.screen2 h1').innerHTML = `Acertou em ${xAttempts} tentativas!`
  }else if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
    alert('Apenas Números de 0 até 10')
  }

  inputNumber.value = ""
  xAttempts++
})

btnReset.addEventListener('click', function(){
  toggleScreen()
  xAttempts = 1
})

//Funções
function toggleScreen(){
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}