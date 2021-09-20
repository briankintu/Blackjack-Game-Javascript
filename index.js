// 1. Use getRandom() to set the values of firstCard and Second

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardEl=document.querySelector("#card-el")
console.log(cardEl)
console.log(sumEl)

let player = {
    name: "Per",
    chips: 143
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


//1. Create a funciton, getRandomCard()
//Make this function a random number between 1 and 13
function getRandomCard() {
   let randomCardNumber =  Math.floor( Math.random()*13) + 1
    if ( randomCardNumber === 1){
    return  11
    }
    
    else if ( randomCardNumber > 10) {
        return 10

    }
    else {
        return randomCardNumber
    }
}

// 2. Store the sum paragrah in avariable called sumEl

function startGame() {

    isAlive = true

    // Generate two random numbers
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [ firstCard, secondCard]
    sum = firstCard + secondCard

    

    // Re-assign the cards and sum variable so that the game start

    
    

    renderGame()

}

 function renderGame() {
     
    cardEl.textContent = "Cards :"
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
       
    }
    sumEl.textContent = " Sum :" + sum
     //3. Render the sum on the page using this format --> "Sum: 14"
    if(sum <= 20) {
        message = "Do you want to draw a new card?"
        sumEl.textContent = " Sum :" + sum
    }
    else if (sum === 21) {
        message = "You've got Blackjack"
        hasBlackJack = true
    }
     else {
         message = "You're out of the game!"
         isAlive = false
     }

     //2. Display the message in the messageEl using messageEl.textContent
     messageEl.textContent = message
 
     
 }

 function newCard() {

    if (isAlive === true && hasBlackJack === false) {
     console.log("Drawing a new card form the deck")
     let card = getRandomCard()
     sum += card
    // sum = firstCard + secondCard + card
    cards.push(card)
    console.log(cards)
     console.log(sum)
      renderGame()
      //cardEl.textContent += " " + card
     //message= "Drawing a new card !"
     //messageEl.textContent = message
    }


 }

