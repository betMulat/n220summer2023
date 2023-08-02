//function to create a div element 
function createDiv(obj) {
    let div = document.createElement("div");    
    div.innerText = "This is a div.";
    div.style.width = obj.width;
    div.style.height = obj.height;
    div.style.background=obj.color;
    document.body.appendChild(div);
  
  }
  //on click function to take the input and return the result 
  function myFunction(){
    //the given array
  let objects = [
      { color: "#FF0000", height: 100, width: 300 },
      { color: "#FFFF00", height: 200, width: 200 },
      { color: "#ff0000", height: 300, width: 100 },
  ];
  //creating a loop that create three div based on the the above data in the array
  for(i=0;i<objects.length;i++)
      createDiv(objects[i]);
  
  }