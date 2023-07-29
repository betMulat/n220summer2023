
// Array of strings
let contentArray = ['Home content.....', 'About content.....', 'Art content......'];

//onclick function takes the input and retun the result 
function showContent(index) {
  // Get the div element
  let contentDiv = document.getElementById('contentDiv');

  // Check if the index is valid
  if (index >= 0 && index < contentArray.length) {
    // Set the div content to the corresponding string from the array
    contentDiv.textContent = contentArray[index];
  } else {
    // Display an error message if the index is out of bounds
    contentDiv.textContent = 'Invalid index!';
  }
}