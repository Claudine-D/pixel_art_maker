//  Get and store elements: Submit Button and Table
const submitButton = document.querySelector('input[type=submit]');
const grid = document.querySelector('#pixelCanvas');

// When submit is clicked, create new grid by calling makeGrid()
submitButton.addEventListener('click', function(event) {
  // Remove any pre-existing grid
  while (grid.firstElementChild) {
  grid.removeChild(grid.firstElementChild);
  };
  // Call makeGrid()
  event.preventDefault();
  makeGrid();
});

// Creating the grid depending on user inputs
function makeGrid() {
  // Get the height and width as inputted by user
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  // Create grid
  for (let i = 1; i <= gridHeight; i++) {
    // Creat <tr> element
    const row = document.createElement('tr');
    for (let i = 1; i <= gridWidth; i++) {
      // Create <td> element + add event listener to change background colour
      const square = document.createElement('td');
      square.addEventListener('click', function() {
        const colour = document.querySelector('input[type=color]').value;
        square.style.backgroundColor = colour;
      });
      // Append the squares into rows
      row.appendChild(square);
    };
    // Append the rows to <table>
    grid.appendChild(row);
  };
}


/* I wasn't too sure exactly what 'Event listeners are properly added to the grid squares (and not to the border or the table itself).' meant.
In Lesson 10.5 - Avoid too many events, it's suggested that to make the code more efficient the event listener should be attached to the parent element, and event.target shoudl be used in the event listener function.
However since (I think) this means attaching it to the table element (which the rubric says not to do), I didn't use that method in the code above. Just in case I've misunderstood and it was a viable method for this project, I've also written out code using event.target below: */
/*
function fillColour(event) {
  const colour = document.querySelector('input[type=color]').value;
  event.target.style.backgroundColor = colour;
};

function makeGrid() {

  event.preventDefault();
  gridHeight = document.getElementById('inputHeight').value;
  gridWidth = document.getElementById('inputWidth').value;
  for (let i = 1; i <= gridHeight; i++) {
    const row = document.createElement('tr');
    for (let i = 1; i <= gridWidth; i++) {
      const square = document.createElement('td');
      row.appendChild(square);
    };
    grid.addEventListener('click', fillColour);
    grid.appendChild(row);
  };
};
*/
