let txtExample = document.getElementById("txtExampel")

function calcScore(){
    let myArray = [2,4,6,8,10];

    //reduce array
    let sum = 0

    for(let i=0; i<myArray.length; i++){
        sum += myArray[i];
    }
    console.log(sum);
}