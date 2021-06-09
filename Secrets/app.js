const mytext = document.getElementById('mytext');
const btn = document.getElementById('btn');
const items = document.getElementById('items');





btn.addEventListener('click', function (e) {
  e.preventDefault();
  const paragraph = document.createElement('p');
  paragraph.classList.add("item");
  paragraph.innerText = mytext.value;
  items.appendChild(paragraph);
  // we make the input value to '' so the text field gets empty when we enter our text
  mytext.value = '';
  paragraph.addEventListener('transitionend', () => paragraph.remove())
  setTimeout(() => paragraph.classList.add('hidden', 2000));

});

// Get the input field
let input = document.getElementById("mytext");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn").click();
  }
});



