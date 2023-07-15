let dvSquare = document.getElementById("square");
dvSquare.style.backgroundColor = "#145402";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function fun(){
     //accessing the div using id square
     let x = document.getElementById('square');
     //getting the width from the div and increasing 10% , adding px to it. 
     let div_width = x.offsetWidth + (0.1 * x.offsetWidth)+"px";
     //getting the height from the div and increasing 10% , adding px to it.
     let div_height = x.offsetHeight + (0.1 * x.offsetHeight)+"px";
     //Setting the width of div to new div_width
     x.style.width = div_width;
     //Setting the height of the div to new div_height
     x.style.height = div_height;
}