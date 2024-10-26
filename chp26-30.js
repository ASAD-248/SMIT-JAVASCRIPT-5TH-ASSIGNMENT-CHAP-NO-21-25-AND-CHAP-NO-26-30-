

        //  Q No: 01; 

var num1 = 3.45214;
var roundValue = Math.round(num1);

var num2 = 3.45214;
var floorValue = Math.floor(num2);

var num3 = 3.45214;
var ceilValue = Math.ceil(num3);

document.write(` Number1 ${num1}<br> round of value: ${roundValue}<br> floor value: ${floorValue}<br>ceil value: ${ceilValue}<br><br><br><br> `)


//          Q No: 02; 

var num1 = -2.673;
var roundValue = Math.round(num1);

var num2 = -2.673;
var floorValue = Math.floor(num2);

var num3 = -2.673;
var ceilValue = Math.ceil(num3);

document.write(` Number1 ${num1}<br> round of value: ${roundValue}<br> floor value: ${floorValue}<br>ceil value: ${ceilValue} <br>  `)

//          Q No: 03;

var value = -4;
var absoluteVal = Math.abs(value);

document.write(`<br>The absolute vcalue of -4 is: ${absoluteVal}`)

//          Q No: 04;

var randomNum = Math.floor(Math.random()*6) + 1;

document.write(`Random dice value: ${randomNum}<br><br>`)


//          Q No: 05;

var ranCoin = Math.floor(Math.random()*2) + 1;
if(ranCoin === 1){
    document.write(`Random coin value: Tail<br>`)
}else{
    document.write(`Random coin value: Head<br><br>`)
}

//          Q No: 06;

var randomNum = Math.floor(Math.random()*100)+1;
document.write(`<br>Random between 1 and 100: ${randomNum}<br>`)


//          Q No: 07;

var userWeight = +prompt("Enter your Weight");
var typeChange = parseInt(userWeight);
var typeCheck = typeof(typeChange);
document.write(`<br>The Weight of user is: ${userWeight} Kilograms<br>`)


//          Q No: 08;

var userGuess = +prompt("Guess the number 1 to 10 ");
var secNum = Math.ceil(Math.random()*9);

if(secNum === userGuess){
    alert(`Congratulation the user number ${userGuess} is correct`)
   }
   else{
    alert("Try again!")
   }