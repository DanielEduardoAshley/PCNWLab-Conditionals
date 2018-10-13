function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}

/*
    @func generateTrafficLight
    @returns {string}
    @desc - generates a random number from 1 to 3
            if 1, return 'red'
            if 2, return 'green',
            if 3, return 'blue'
            
    @example generateTrafficLight(); // 'red' or 'blue' or 'green'

   
*/
const generateTrafficLight = (generateRandomNumberFromRange) =>{


   if(generateRandomNumberFromRange(1,3) === 1){
       return "red"
   } else if(generateRandomNumberFromRange === 2){
       return "green"
   } else{
       return "blue"
   }
}
console.log(generateTrafficLight(function generateRandomNumberFromRange( s, e ) {
    const random = s + Math.floor( Math.random() * (e-s+1) );
    return random;
}))

function coin(a,b){
const sum = a + b

return 
}

console.log(coin(1,2))
/*
    @func generateRandomPhoneNumber
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
    @example generateRandomPhoneNumber(); // "1-718-786-2825"
*/

    

    
       
function repeats (){

return `1-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}`

}

console.log(repeats())





/*
    @func generateRandomRGB
    @returns {string}
    @desc - generates a random rgb value
            HINT: you will need to use the 
                  generateRandomNumberFromRange 
                  function from above
    
    @example generateRandomRGB(); // "rgb(255, 123, 0)"
*/
const generateRandomRGB = () =>{

return `${generateRandomNumberFromRange(0,255)} ${generateRandomNumberFromRange(0,255)} ${generateRandomNumberFromRange(0,255)}`




}
console.log(generateRandomRGB())
/*
    @func generateLottoTicket
    @returns {string}
    @desc - generates a random lotto ticket with:
            A random number 0-9
            A random number 0-15
            A random number 0-30
            
            Present it as such: L [0-9] [0-15]-[0-30]
    
    @example generateLottoTicket(); // L 9 11-28
*/

const generateLottoTicket = function(){

return `L ${generateRandomNumberFromRange(0,9)} ${generateRandomNumberFromRange(0,15)}-${generateRandomNumberFromRange(0,30)} `


}
console.log(generateLottoTicket())
/*
    @func generatePhoneNumberWithAreaCode
    @param {number} areaCode
    @returns {string}
    @desc - generates a random phone number of the form
            1-718-786-2825
            
            IF `areaCode` is provided, it will use that area code
            and NOT generate one
            
    @example generatePhoneNumberWithAreaCode(); // "1-718-786-2825"
    @example generatePhoneNumberWithAreaCode( 646 ); // "1-646-786-2825"

*/
const generatePhoneNumberWithAreaCode = (number = areaCodeInput) =>{
    if( areaCodeInput(number).length === 0){ 
        return `1-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}`
        }
        else if (areaCodeInput(number).length === 3){
        
            return `1-${areaCodeInput(number)}-${generateRandomNumberFromRange(100,999)}-${generateRandomNumberFromRange(100,999)}`    
        }
        else{
            return console.log('Need Full Zip Code to Calculate Number, Fuck You')
        }

}



const areaCodeInput = function(code){
   return `${code}`

}
console.log(areaCodeInput(33).length)

console.log(generatePhoneNumberWithAreaCode("666"))
/*
    @func generateTicketWithLetters
    @returns {string}
    @desc - geneartes a random lotto ticket with:
            A random number 0-9
            A random LOWERCASED LETTER a-z
            A random UPPERCASED LETTER A-Z
            A random number 0-30
            
            Present it as such: L [a-z] [A-Z]-[0-30]
            HINT: look up `String.fromCharCode()` on the Google
            
        @example generateLottoTicket(); // L g M-28
*/

function generateTicketWithLetter(){
   
    return "L " + String.fromCharCode(generateRandomNumberFromRange(97, 112)) + " " + String.fromCharCode(generateRandomNumberFromRange(65, 90)) + "-" + generateRandomNumberFromRange(0, 30)
    


}
console.log(generateTicketWithLetter())
/*
    @func rockPaperScissors
    @param {string} player1
    @param {string} player2
    @returns {number}
    @desc - given a player1 and player2
            returns 1 if player1 has won
            returns 2 if player2 has won
            returns 0 if tie
            returns -1 if invalid input
            expects both player1 and player2 inputs to be either
            "rock", "paper", or "scissors"
    
    @example rockPaperScissors( "rock", "paper" ); // 2
    @example rockPaperScissors( "rock", "scissors"); // 1
    @example rockPaperScissors( "rock", "rock" ); // 0
    @example rockPaperScissors( "r", "p" ); // -1
    @example rockPaperScissors( "r" ); // -1
    @example rockPaperScissors(); // -1
*/
function rockPaperScissors(player1,player2){

if(player1 === "rock" && player2 === "rock" || player1 === "scissors" && player2 === "scissors" || player1 === "paper" && player2 === "paper" ){

        console.log(0)
        return 0 
    }

    else if (player1 === "scissors" && player2 === "paper" || player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock"  ){

        console.log(1)
        return 1

    }
    else if(player1==="rock" && player2==="paper" || player1 === "scissors" && player2 === "paper" || player1 === "paper" && player2 === "scissors"  ){

        console.log(2)
        return 2
    }
    else if(player1 !=="rock" || player1 !=="paper" || player1 === "scissors" && player2 !== "rock" || player2 !== "paper" || player2 !== "scissors"  ){

        console.log(-1)
        return -1
    }
    
}

rockPaperScissors("", "")
/*
    @func RPSwithComputer
    @param {string} player
    @returns {number}
    @desc - given a player,
            randomly selects a "choice" for the computer
            RUNS rockPaperScissors from before with computer's choice
            as `player2`
            expect same results as above

    @example rockPaperScissors( "rock" ); // 2, if computer won
    @example rockPaperScissors( "rock" ); // 1, if player won
    @example rockPaperScissors( "rock" ); // 0, if tied
    @example rockPaperScissors(); // -1
*/
console.log(generateRandomNumberFromRange(0,2))
function RPSwithComputer(player1){
    
    let player2 = () =>{  
        const computer = generateRandomNumberFromRange(0,2)

  if(computer ===0){
    player2 = "rock"
    return player2
} else if (computer===1){
    player2 = "paper"
    return player2
} else if (computer===2){
    player2 = "scissors"
    return player2
    }
}
console.log(player2())

    if(player1 === "rock" && player2 === "rock" || player1 === "scissors" && player2 === "scissors" || player1 === "paper" && player2 === "paper" ){

        console.log(0)
        return 0 
    }

    else if (player1 === "scissors" && player2 === "paper" || player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock"  ){

        console.log(1)
        return 1

    }
    else if(player1==="rock" && player2==="paper" || player1 === "scissors" && player2 === "paper" || player1 === "paper" && player2 === "scissors"  ){

        console.log(2)
        return 2
    }
    else if(player1 !=="rock" || player1 !=="paper" || player1 === "scissors" && player2 !== "rock" || player2 !== "paper" || player2 !== "scissors"  ){

        console.log(-1)
        return -1
    }
   

    


}

RPSwithComputer("")





/*
    @func calculateGrade
    @param {number} grade
    @returns {string}
    @desc - given a numerical grade,
            determine the letter grade

    @example calculateGrade( 90 ); // A
    @example calculateGrade( 80 ); // B
    @example calculateGrade( 70 ); // C
    @example calculateGrade( 60 ); // D
    @example calculateGrade( 54 ); // F
    @example calculateGrade( -10 ); // Error
    @example calculateGrade( 10000 ); // Error
    @example calculateGrade( "lol skool sucks" ); // Error

    
    
*/

function calculateGrade( grade ) {
    if( grade > 100 || grade < 0 || typeof grade !== "number"){

        throw new Error("Error: Please Correct Entry")
    }
    // Write your codes below here
    /*
        assume that grade is the value the user input
        IF grade is between [100, 95]
            UPDATE grade = A (question: what kind of variable should A be?)
        if grade is between [95, 85]
            UPDATE grade = B
        if grade is between [85, 75]
            UPDATE grade = C
        if grade is between [75, 65]
            UPDATE grade = D
        if grade is between [65, 0]
            UPDATE grade = F
    */
    
    else if(grade > 95 ) {
        return "A";
        }
    else if(grade > 85 || grade === 95 ){
        return "B"; // you may choose not to use this
        }
    else if(grade > 75 || grade ===85){
        return "C"
        }
    else if(grade > 65 || grade ===75){
        return "D"
        }
    else if(grade > 0  || grade ===65){
        return "F"
    }

} 

console.log(calculateGrade(100))