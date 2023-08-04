
//onclick function to take the input and return the result 
function handleClick(event){
    let color = document.getElementById(event.id);
    color.style.backgroundColor = color.dataset.color;
}