//Global variables//
var x = 10;
function Add_numbers_1() {//Defining a function and naming it
    document.write(20 + X + "<br>");
}
function Add_number_2() {//Deffining a function and naming it
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();
//End Global variables//

//Local vaiable//
function Add_number_1() {//Defining a function and naming it
var X =10;
document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//End Local vaiable//

//the error X//
function Add_numbers_1() {//Defining a function and naming it 
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {//Defining a function and naming it 
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//the error X//

//If Statements//
if (1 <2){
    document.write("The left number is smaller than the number on the right")
}

function get_Date() {
    if (new Date() .getHours() <18) {
        document.getElementById("Greeting").innerHTML ="How are you today?";
    }
}
//End If Statements//

//Else Statements//
function Age_Function() {//Defining a funnction and naming it
    Age = document.getElementById("Age").value;
    if (Age >=18){
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}
//End Else Statements//