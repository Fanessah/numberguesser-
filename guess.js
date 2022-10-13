/*
 create a program that bgeuss a number from 1 to 10 
 then aks us to guess the number.
if it is higher say "too high" and ask again.again
if it is lower say "too low" and ask again .
if it is the right number say "congratulations "
*/

import readline from "readline-sync"  

let userGuessedRight = false


    //  Guess a number from 1-10
    let numberChosen = Math.floor(Math.random() * 10)
    // console.log(numberChosen)

    while(!userGuessedRight) {
        let guess = readline.question("what is your guess?")
        
        if (guess == numberChosen) //
        {
            console.log("congratulations")
            userGuessedRight = true
        }
        if (guess < numberChosen)
        {
            console.log("too low")
            userGuessedRight = false
        }
        if (guess > numberChosen)
        {
            console.log("too high")
            userGuessedRight = false
        }
    // console.log(guess)

    }
    
while(!userGuessedRight) {
    console.log ("what is your guess?")

 } 