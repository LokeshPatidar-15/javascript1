const randomnumber = (parseInt(Math.random() * 100 +1));

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowrrhi = document.querySelector('.lowOrHi ')
const startover = document.querySelector('.resultParas ')

const p = document.createElement('p ')

let prevguess = []
let numguess = 1
let playgame = true

if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess <1 ){
        alert('Please enter a valid number')
    } else if(guess > 100 ){
        alert('Please enter a valid number')
    } else{
        prevguess.push(guess)
        if(numguess === 11){
            displayGuess(guess)
            displayMessage(`game over`)
            endGame();
        }else{
            displayGuess(guess)
            chekGuess(guess )
        }
    }
}

function chekGuess(guess){
    if (guess === randomnumber) {
        displayMessage(`you guessed right`)
        endGame()
    }else if (guess < randomnumber) {
        displayMessage(`number is tooo low`)  
    }else if (guess > randomnumber) {
        displayMessage(`number is tooo high`)  
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}`
    numguess++
}

function displayMessage(message){
    
}

function newGame(){

}

function endGame(){
    
}

 


 
