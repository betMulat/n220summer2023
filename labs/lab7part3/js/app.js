
    let userName = document.getElementById("userName");
    let Password = document.getElementById("Password");
    let userResult = document.getElementById("userResult");
    
   
    function userInput() {
        //if statement to check if the username and password match 
        if (document.getElementById("userName").value == "Username" &&
        document.getElementById("Password").value == "Password"){
            userResult.innerHTML = "Success"; //return success if it match
        } else{
            userResult.innerHTML = "Wrong Information"; //return worng iformation if it did not match 
        }
       
    }