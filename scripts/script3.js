function practice(){
    let num1=10;
    let num2=10;

    if(num1>num2){
        //you will get here if the statement is true
        console.log("The num1 is greater than num2");
    }else if(num1<num2){
        console.log("The num1 is less than the num2");
    }else{
        console.log("The numbers are equal");
    }
}

// Challenge: Driving License


function getDriverLicense(){
    // 1. Prompt the user to enter their age.
    let age = Number(prompt("Enter your age:"));
    // 2. Use an if-else statement to determine if the person can get a driving license.
    if(age>17){
        // 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
        console.log("Congratulations! You can get your driving license.");
    }else{
        // 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."
        console.log("Sorry, you are too young to get a driving license.");
    }
    
}

// Exercise: Guess the Number Game


function miniGame(){
      // 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
    let randomNum = Math.floor(Math.random()*10)+1;
    // 2. Ask the user to guess the number. (prompt)
    let userGuess = Number(prompt("Guess the number between 1 and 10:"));
    // 3. Use an if-else statement to check if the user's guess is correct.
    if(userGuess==randomNum){
        // 4. If the guess is correct, print on the HTML "Congratulations! You guessed the number."
        document.getElementById("results").innerHTML="Congratulations! You guessed the number.";
    }else{
        // 5. If the guess is incorrect, print on the HTML "Sorry, that's not correct. The number was [generated number]".
        document.getElementById("results").innerHTML="Sorry, that's not correct. The number was: " + randomNum;
    }
}

//Database simulation
let userName="sjimenez@sdgku.edu";
let password="Test1234";

function login(){
    //get the uname and pass from the user
    let uname=prompt("Enter your user name:");
    let pass=prompt("Enter your password:");

    //compare the inputs with the DB data
    if(uname==userName && pass==password){
        document.getElementById("results").innerHTML="Welcome to the system " + uname;
    }else{
        document.getElementById("results").innerHTML="Invalid credentials";
    }
}