document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // Track our tasks

  let tasksPriority = {
    red: [],
    yellow: [],
    green: []
  }
  // Adding user input to task list
  // Get form element
  let form = document.querySelector("#create-task-form");
  // Get task list element
  let redList = document.getElementById("red-tasks");
  let yellowList = document.getElementById("yellow-tasks");
  let greenList = document.getElementById("green-tasks");
  form.addEventListener("submit", (event) => {
    // Prevent page refresh
    event.preventDefault();
    // Get input element from DOM
    let input = document.getElementById("new-task-description");
    // Add colored task functionality
    // Grab select element
    let select = document.querySelector("#color-selector");
    let selectOptions = select.options;
    let selectedColor = selectOptions[select.selectedIndex].value;
    // style the task based on color from dropdown. 
    console.log(selectedColor);
    
    // Getting the text value from the input tag
    let inputText = input.value;
    
    // we wanted to remove the text from the input. the below by storing in the variable inputText.  we made it blank to clear the text box after submission.
    
    input.value = '';
    
    // Create li element
    let li = document.createElement("li");
    
    // Add task from user input to our li tag
    li.textContent = " " + inputText + " ";
    li.style.color = selectedColor;
    // Adding user task to task list
    
    // we need to first check priority via the color and place in tasks array accordingly. 
    
    
    // we were thinking of 2 ways to handle the priority list... one would be to create an array of 3 arrays (for each color). then to append each red text value to the red array, etc for each color. 
    // the second way would be to just create 3 li values for the ul. One for each color. Then we could just push the values to each one. 
    
    // we ended up going with an object, of 3 arrays. 
    
    
        if (selectedColor == 'green') {
          tasksPriority.green.push(inputText)
          greenList.append(li);
        }
        else if (selectedColor == 'red') {
          tasksPriority.red.push(inputText)
          redList.append(li);
        }
        else {
          tasksPriority.yellow.push(inputText)
          yellowList.append(li);

        }
        console.log(tasksPriority)
    // Delete Functionality
    // Create delete button
    let deleteBtn = document.createElement("button");
    // Added text content to button
    deleteBtn.textContent = "X";
    // Append delete button to page
    li.append(deleteBtn);
    // Add delete button click event
    deleteBtn.addEventListener("click", () => {
      // delete the li
      li.remove();
    });

    // we're implementing sorting functionality using the array we created at top before function.

    // we want to add every choice to the task list, and based on its color, decide where it goes. 
 // we created our task list. now we want the screen to reflect this. 
 



    // display task list to user in that order





  });
});