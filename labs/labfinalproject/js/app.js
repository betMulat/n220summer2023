//Function called whenever user tab on any box 
function myfunc(){
    //setting object oriented to all boxes or input fields 
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    let b1btn, b2btn, b3btn, b4btn, b5btn, b6btn, b7btn, b8btn, b9btn;
    b1btn = document.getElementById("b1").value;
    b2btn = document.getElementById("b2").value;
    b3btn = document.getElementById("b3").value;
    b4btn = document.getElementById("b4").value;
    b5btn = document.getElementById("b5").value;
    b6btn = document.getElementById("b6").value;
    b7btn = document.getElementById("b7").value;
    b8btn = document.getElementById("b8").value;
    b9btn = document.getElementById("b9").value;
//check if player x worn or not and dislabled all the other fields 
if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b2btn.style.color = "red";
    b3btn.style.color = "red";
}
else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.color = "red";
    b4btn.style.color = "red";
    b7btn.style.color = "red";
}
else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = "Player X won";

    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.color = "red";
    b8btn.style.color = "red";
    b9btn.style.color = "red";
}
else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";

b1btn.disabled = true;
b2btn.disabled = true;
b4btn.disabled = true;
b5btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;

b3btn.style.color = "red";
b6btn.style.color = "red";
b9btn.style.color = "red";
}
else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
b2btn.disabled = true;
b3btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;

b1btn.style.color = "red";
b5btn.style.color = "red";
b9btn.style.color = "red";
}
else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
b1btn.disabled = true;
b2btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b3btn.style.color = "red";
b5btn.style.color = "red";
b7btn.style.color = "red";
}
else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
b1btn.disabled = true;
b2btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b7btn.disabled = true;
b9btn.disabled = true;

b2btn.style.color = "red";
b5btn.style.color = "red";
b8btn.style.color = "red";
}
else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
document.getElementById('print')
    .innerHTML = "Player X won";
b1btn.disabled = true;
b2btn.disabled = true;
b3btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b4btn.style.color = "red";
b5btn.style.color = "red";
b6btn.style.color = "red";
}

// Checking of Player X finish
// Checking for Player 0 starts, Is player 0 won or
// not and after that disabled all the other fields
else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
b2 == '0') && (b3 == '0' || b3 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b4btn.disabled = true;
b5btn.disabled = true;
b6btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b1btn.style.color = "red";
b2btn.style.color = "red";
b3btn.style.color = "red";
}
else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
b4 == '0') && (b7 == '0' || b7 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b2btn.disabled = true;
b3btn.disabled = true;
b5btn.disabled = true;
b6btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b1btn.style.color = "red";
b4btn.style.color = "red";
b7btn.style.color = "red";
}
else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
b8 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b1btn.disabled = true;
b2btn.disabled = true;
b3btn.disabled = true;
b4btn.disabled = true;
b5btn.disabled = true;
b6btn.disabled = true;

b7btn.style.color = "red";
b8btn.style.color = "red";
b9btn.style.color = "red";
}
else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
b6 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b1btn.disabled = true;
b2btn.disabled = true;
b4btn.disabled = true;
b5btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;
b3btn.style.color = "red";
b6btn.style.color = "red";
b9btn.style.color = "red";
}
else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
b5 == '0') && (b9 == '0' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b2btn.disabled = true;
b3btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;

b1btn.style.color = "red";
b5btn.style.color = "red";
b9btn.style.color = "red";
}
else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
b5 == '0') && (b7 == '0' || b7 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b1btn.disabled = true;
b2btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b3btn.style.color = "red";
b5btn.style.color = "red";
b7btn.style.color = "red";
}
else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
b5 == '0') && (b8 == '0' || b8 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b1btn.disabled = true;
b3btn.disabled = true;
b4btn.disabled = true;
b6btn.disabled = true;
b7btn.disabled = true;
b9btn.disabled = true;

b2btn.style.color = "red";
b5btn.style.color = "red";
b8btn.style.color = "red";
}
else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
b5 == '0') && (b6 == '0' || b6 == '0')) {
document.getElementById('print')
    .innerHTML = "Player 0 won";
b1btn.disabled = true;
b2btn.disabled = true;
b3btn.disabled = true;
b7btn.disabled = true;
b8btn.disabled = true;
b9btn.disabled = true;

b4btn.style.color = "red";
b5btn.style.color = "red";
b6btn.style.color = "red";
}

// Checking of Player 0 finish
// Here, Checking about Tie
else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
|| b2 == '0') && (b3 == 'X' || b3 == '0') &&
(b4 == 'X' || b4 == '0') && (b5 == 'X' ||
    b5 == '0') && (b6 == 'X' || b6 == '0') &&
(b7 == 'X' || b7 == '0') && (b8 == 'X' ||
    b8 == '0') && (b9 == 'X' || b9 == '0')) {
document.getElementById('print')
    .innerHTML = "Match Tie";
}
else {

// Here, Printing Result
if (flag == 1) {
    document.getElementById('print')
        .innerHTML = "Player X Turn";
}
else {
    document.getElementById('print')
        .innerHTML = "Player 0 Turn";
}
}
}

// Function to reset game
function myfunc_2() {
location.reload();
b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

// Here onwards, functions check turn of the player
// and put accordingly value X or 0
flag = 1;
function myfunc_3() {
if (flag == 1) {
document.getElementById("b1").value = "X";
document.getElementById("b1").disabled = true;
flag = 0;
}
else {
document.getElementById("b1").value = "0";
document.getElementById("b1").disabled = true;
flag = 1;
}
}

function myfunc_4() {
if (flag == 1) {
document.getElementById("b2").value = "X";
document.getElementById("b2").disabled = true;
flag = 0;
}
else {
document.getElementById("b2").value = "0";
document.getElementById("b2").disabled = true;
flag = 1;
}
}

function myfunc_5() {
if (flag == 1) {
document.getElementById("b3").value = "X";
document.getElementById("b3").disabled = true;
flag = 0;
}
else {
document.getElementById("b3").value = "0";
document.getElementById("b3").disabled = true;
flag = 1;
}
}

function myfunc_6() {
if (flag == 1) {
document.getElementById("b4").value = "X";
document.getElementById("b4").disabled = true;
flag = 0;
}
else {
document.getElementById("b4").value = "0";
document.getElementById("b4").disabled = true;
flag = 1;
}
}

function myfunc_7() {
if (flag == 1) {
document.getElementById("b5").value = "X";
document.getElementById("b5").disabled = true;
flag = 0;
}
else {
document.getElementById("b5").value = "0";
document.getElementById("b5").disabled = true;
flag = 1;
}
}

function myfunc_8() {
if (flag == 1) {
document.getElementById("b6").value = "X";
document.getElementById("b6").disabled = true;
flag = 0;
}
else {
document.getElementById("b6").value = "0";
document.getElementById("b6").disabled = true;
flag = 1;
}
}

function myfunc_9() {
if (flag == 1) {
document.getElementById("b7").value = "X";
document.getElementById("b7").disabled = true;
flag = 0;
}
else {
document.getElementById("b7").value = "0";
document.getElementById("b7").disabled = true;
flag = 1;
}
}

function myfunc_10() {
if (flag == 1) {
document.getElementById("b8").value = "X";
document.getElementById("b8").disabled = true;
flag = 0;
}
else {
document.getElementById("b8").value = "0";
document.getElementById("b8").disabled = true;
flag = 1;
}
}

function myfunc_11() {
if (flag == 1) {
document.getElementById("b9").value = "X";
document.getElementById("b9").disabled = true;
flag = 0;
}
else {
document.getElementById("b9").value = "0";
document.getElementById("b9").disabled = true;
flag = 1;
}
}

/*
    //checking if player x won or not and dislabled all the other fields 
    if((b1== 'x' || b1 == 'x') && (b2 == 'x'|| b2 == 'x') && (b3 == 'x' || b3 == 'x')) {
        document.getElementById('print').innerHTML = "Player X won!";
        b4btn.disabled = true; 
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'x') && (b4 == 'x' || b4 == 'x') && (b7 == 'x' || b7 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b2btn.disabled = true; 
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b7 == 'x' || b7 == 'x') && (b8 == 'x' || b8 == 'x') && (b9 == 'x' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'x') && (b6 == 'x' || b6 == 'x') && (b9 == 'x' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b1 == 'x' || b1 == 'x') && (b5 == 'x' || b5 == 'x') && (b9 == 'x' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b2btn.disabled = true; 
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == 'x' || b3 == 'x') && (b5 == 'x' || b5 == 'x') && (b7 == 'x' || b7 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b2 == 'x' || b2 == 'x') && (b5 == 'x' || b5 == 'x') && (b8 == 'x' || b8 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b4 == 'x' || b4 == 'x') && (b5 == 'x' || b5 == 'x') && (b6 == 'x' || b6 == 'x')){
        document.getElementById('print').innerHTML = "Player X won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    //checking of player x finish 
    //checking for player 0 starts, is player 0 won or not, and disabled the rest fields
    else if((b1== '0' || b1 == '0') && (b2 == '0'|| b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print').innerHTML = "Player 0 won!";
        b4btn.disabled = true; 
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";
    }
    else if ((b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b2btn.disabled = true; 
        b3btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b1btn.style.color = "red";
        b4btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;

        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b5btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b1 == '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b2btn.disabled = true; 
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;

        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";
    }
    else if ((b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";
    }
    else if ((b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;

        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";
    }
    else if ((b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0')){
        document.getElementById('print').innerHTML = "Player 0 won!";
        b1btn.disabled = true; 
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;

        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";
    }
    //checking for Tie and let the player know the match is tie
    else if ((b1 == 'x' || b1 == '0') && (b2 == 'x' || b2 == '0') &&
     (b3 == 'x' || b3 == '0') && (b4 == 'x' || b4 == '0') && 
     (b5 == 'x' || b4 == '0') && (b6 == 'x' || b6 == '0') && 
     (b7 == 'x' || b7 == '0') && (b8 == 'x' || b8 == '0') && 
     (b9 == 'x' || b9 == '0')) {
        document.getElementById('print').innerHTML = "Match Tie";
     }
     else {
        //printing the result 
        if (flag == 1) {
            document.getElementById('print').innerHTML = "Player X turn";
        }
        else {
            document.getElementById('print').innerHTML = "Player 0 turn";
        }
     }
}
//Function to reset the match
function myfunction_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}
//functions check turn of the player and put accordingly value x or 0
flag = 1;
function myfunction_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disaabled = true;
        flag = 1;

    }
}
function myfunc_4() {
    if(flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disaabled = true;
        flag = 1;
    }
}
function myfunc_5() {
    if(flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disaabled = true;
        flag = 1;
    }
}
function myfunc_6() {
    if(flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disaabled = true;
        flag = 1;
    }
}
function myfunc_7() {
    if(flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disaabled = true;
        flag = 1;
    }
}
function myfunc_8() {
    if(flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disaabled = true;
        flag = 1;
    }
}
function myfunc_9() {
    if(flag == 1) {
        document.getElementById("b7").value = "X";
        document.getElementById("b7").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = "0";
        document.getElementById("b7").disaabled = true;
        flag = 1;
    }
}
function myfunc_10() {
    if(flag == 1) {
        document.getElementById("b8").value = "X";
        document.getElementById("b8").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = "0";
        document.getElementById("b8").disaabled = true;
        flag = 1;
    }
}
function myfunc_11() {
    if(flag == 1) {
        document.getElementById("b9").value = "X";
        document.getElementById("b9").disaabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = "0";
        document.getElementById("b9").disaabled = true;
        flag = 1;
    }
}

*/