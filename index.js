// Get a reference to the HTML element with id="save-el"
// This will display the list of saved counts
let saveEl = document.getElementById("save-el")

// Get a reference to the HTML element with id="count-el"
// This will display the current count on the screen
let countEl = document.getElementById("count-el")

// Initialize the count variable to 0
// This variable will track the current count value
let count = 0

// This function runs when the "Increment" button is clicked
function increment() {
    count += 1                           // Increase the count by 1
    countEl.textContent = count         // Update the count display on the page
}

// This function runs when the "Save" button is clicked
function save() {
    let countStr = count + " - "        // Create a string with the current count followed by a dash
    saveEl.textContent += countStr      // Append the count string to the saveEl text (history of counts)
    countEl.textContent = 0             // Reset the count display on the page to 0
    count = 0                           // Reset the internal count variable to 0
}
