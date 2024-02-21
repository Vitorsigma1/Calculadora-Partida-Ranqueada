

let victories = 90
let losses = 20
const gameResult = ranked(victories, losses)

function ranked(victories, losses){
    let winningBalance = victories - losses
    let level = " "

        if (winningBalance <= 10){
            level = "Iron"
        }
        else if (winningBalance >= 11 && winningBalance <= 20){
            level = "Bronze"
        }
        else if (winningBalance >= 21 && winningBalance <= 50){
            level = "Silver"
        }
        else if (winningBalance >= 51 && winningBalance <= 80){
            level = "Gold"
        }
        else if (winningBalance >= 81 && winningBalance <= 90){
            level = "Diamond"
        }
        else if (winningBalance >= 91 && winningBalance <= 100){
            level = "Legendary"
        }
        else if (winningBalance >= 101){
            level = "Immortal"
        }
            
        return "The hero has a balance of " + winningBalance + " victories and is at level of " + level + "!"
}
console.log(gameResult)
