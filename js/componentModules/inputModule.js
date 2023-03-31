const InputChanger = (() => {
    
    
    // Function to replace the calories input with a number input if it's not a number input already
    const replaceCaloriesInput = () => {
      // Get the current calories input element
        const oldCaloriesInput = document.getElementById("calories-input");
        
        // Check if the current input type is not 'number'
        if (oldCaloriesInput.getAttribute('type') !== 'number') {
            // Create a new input element with type 'number'
            const newCaloriesInput = document.createElement("input");
            newCaloriesInput.type = "number";
            newCaloriesInput.min = 0;
            newCaloriesInput.step = 1;
            newCaloriesInput.classList.add("calories-input");
            newCaloriesInput.placeholder = "Add calories";
            newCaloriesInput.id = "calories-input";
            
            // Add focus event listener to change the style of the new input and its label
            newCaloriesInput.addEventListener("focus", () => {
                newCaloriesInput.style.outline = "none";
                newCaloriesInput.style.borderBottomColor = "green";
                document.querySelector('.calories-label').style.color = "green";
            });
            
            // Add blur event listener to revert the style of the new input and its label
            newCaloriesInput.addEventListener("blur", () => {
                newCaloriesInput.style.borderBottomColor = "darkgray";
                document.querySelector('.calories-label').style.color = "darkgray";
            });
            
            // Replace the old calories input with the new number input
            oldCaloriesInput.parentNode.replaceChild(newCaloriesInput, oldCaloriesInput);
        };
    }


    // Function to change the color of input fields and labels on focus and blur events
    const changeInputsColor = () => {
    // Get all input fields and labels within the .meal-calories container
        const inputFields = document.querySelectorAll(".meal-calories input");
        const labels = document.querySelectorAll(".meal-calories label");

        // Loop through each input field and its corresponding label
        inputFields.forEach((input, index) => {
            // Add focus event listener to change the color of the input border and label
            input.addEventListener("focus", (event) => {
                // Replace the calories input with a number input if needed
                replaceCaloriesInput();
                // Change the input border color and label color to green
                event.target.style.borderBottomColor = "green";
                labels[index].style.color = "green";
            });

            // Add blur event listener to revert the color of the input border and label
            input.addEventListener("blur", (event) => {
                // Change the input border color and label color back to dark gray
                event.target.style.borderBottomColor = "darkgray";
                labels[index].style.color = "darkgray";
            });
        });
    };

    const clearInputs = ()=>{
        document.getElementById("meal-input").value = "";
        document.getElementById("calories-input").value = "";
    }

    const prepereInputs = ()=>{
        let textData = event.target.parentElement.querySelector("div").textContent;
        let textDataFilter = textData.replace("Calories","");
  
        let mealData = textDataFilter.split(":");
  
        mealData = mealData.map(textDataFilter => textDataFilter.trim());
        
        document.getElementById("meal-input").value = mealData[0];
        document.getElementById("calories-input").value = mealData[1];
  }

  
    // Public API
    return {
      changeInputsColor,
      clearInputs,
      prepereInputs,
    };
  })();
  
  export default InputChanger;