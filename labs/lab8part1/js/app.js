let userType = document.getElementById("userType");
let divResult = document.getElementById("divResult");
//function to dicren if it is divisible by seven
function isDisvisibleBySeven(num) {
    return num%7 == 0;   
}
//onclick function takes the input and return the result 
function userInput() {
    let x = document.getElementById("userType").value;
    if(x% 7 == 0){
        divResult.innerHTML = "The number is divisible by 7";
    }else{
        divResult.innerHTML = "The number is not divisible by 7";
        
    }

}

