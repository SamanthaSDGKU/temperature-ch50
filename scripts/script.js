var num1 = Number(prompt("Enter your number"));
var num2 = Number(prompt("Enter your number2:"));
var operation = prompt(" Menu : 1. Sum - 2. Subs - 3. Div - 4. Mult");

if(operation=="1"){
    var sum=num1+num2;//sum operation
    document.write(num1 + " ➕ " + num2 + "=" + sum); //display the result
}

if(operation=="2"){
    var subs = num1 - num2;
    document.write(num1 + " - " + num2 + "=" +subs);
}

if(operation=="3"){
    var mult = num1 * num2;
    document.write(num1 + " x " + num2 + "=" +subs);
}

if(operation=="4"){
    var div =num1 / num2;
    document.write(num1 + " / " + num2 + "=" +subs);
}



