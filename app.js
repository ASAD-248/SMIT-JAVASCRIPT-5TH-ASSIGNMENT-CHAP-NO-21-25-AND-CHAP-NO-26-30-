


//  Q no: 01;
// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

var firstName = prompt("Enter first Name ").toLocaleLowerCase(firstName);
var lastName = prompt(" Enter Last Name").toLocaleLowerCase(lastName);
var fullName = ( firstName + " " + lastName);
document.write(`Hello ${fullName } Wellcome`);


//  Q no: 02;
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var favMobile = prompt("entere your phone Model ");
var userLenght = favMobile.length;
document.write(`<h1> My favriote phone is : ${favMobile} <br> Lenght of String : ${userLenght}</h1>`)

//  Q no: 03;
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


var string = 'Pakistan';
document.write(` The index of 'n' ${string.indexOf('n')}<br>`)

//  Q no: 04;
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var string = 'Hello World';
document.write(`<br> String: ${string} <br> Last index of 'l': ${string.lastIndexOf('l')}`)

//  Q no: 05;
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

var string = "Pakistani";
var result = string.indexOf("i");

document.write(`<br> String:${string}<br> Character at index 3: ${string[3]}`)

//  Q no: 06;
// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Entere first Name ").toLocaleLowerCase();
var lastName = prompt(" Enter Last Name").toLocaleLowerCase(lastName);
var fullName = ("Hello" + " " + firstName+ " " + lastName + "Wellcome");
document.write(fullName);

//  Q no: 07;
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
var rep = string.replace("Hyderabad", "islamabad")
document.write(`<br> City: ${city}<br> After Replacement: ${rep}<br>`)

//  Q no: 08;

var message = "<br> Ali and Sami are best friends. They play cricket and football together.<br>";
var repl = message.replaceAll("and", "&")
document.write(message, repl)

//  Q no: 09;
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var value = "472";
var strType = typeof(string);
var conNum = parseInt(string);
var numType = typeof(conNum);
document.write(`<br> Value of : ${value}<br> type of : ${strType} <br> Valu of : ${conNum} <br> Type of : ${numType}`)

//  Q no: 10;


var user = prompt("enter any word");
var convertCapital = user.toUpperCase();
document.write(`<br>User input:${user}<br> Upper case: ${convertCapital}`)

//  Q no: 11;

var user = prompt("Enter any word");
var copy = user.slice(1);
var convertstr = user.slice(0,1).toUpperCase() + user.slice(1);
document.write(`<br>User input: ${user} <br>Title case: ${convertstr}`)


//  Q no: 12;

var num = 35.36;
var convNum = num.toString();
var conNumToString = convNum.replace(".","")
document.write(`<br>Number: ${num}<br> Result: ${conNumToString}<br>`);

//  Q no: 13;

var userinput = prompt("enter user name ");
var userSpecialCharactr = ["@","!" ,".",","];

for(var i = 0; i < userinput.length; i++){

    if(userSpecialCharactr.includes(userinput[i])){
        alert("Please enter valud username")
        break;
    }
}

//  Q no: 14;



var userSerch = prompt("serch any bakery items").toLowerCase();
var items = ["cake", "apple" , "pie", "cookie", "chips", "patties"];
var foundit;
var index;
var product;

for(var i = 0; i < items.length; i++){

    if(items[i] === userSerch){
        foundit = true;
        index = i;
        product = items[i];
        break;
    }

}

if( foundit){
    alert(` The ${userSerch} is available at index ${index} our bakery `)
}
else{
    alert(`The item is not available at index in our bakery`)
}


//  Q no: 15;





//  Q no: 16;

var str = "University of Karachi".split("");

for(var i = 0; i < str.length; i++ ){
  document.write(`${str[i]} <br>`)
}

//  Q no: 17;

var user = prompt("Enter any character")
var findLast = user[user.length-1];

document.write(`<br>User input: ${user}<br> Last character of input: ${findLast}`)
    

//  Q no: 18;

var string = "The quick brown fox jumps over the lazy dog.".toLowerCase().split(" ");
var count = 0;
for(var i = 0; i < string.length; i++){

  if(string[i] === "the"){
    count++;
  }
}
document.write(`Text ${string}<br> ther are ${count} occurence(s) word of 'the`)

