import { CardState, DefaultState } from './stateModules/defaultState.js';
import { EditState } from './stateModules/editState.js';
import { StepBackState } from './stateModules/stepBackState.js';

import { MealModule } from './componentModules/mealModule.js';
import InputChanger from './componentModules/inputModule.js';

let total = 0;


function convertToMealAndCalories(textElement){
    let newstr1 = textElement.replace("Calories","");
    let newStr2 = newstr1.replace(/\s/g, "");
    let parts = newStr2.split(":");

    return parts;
}



function handlePencilClick() {
    const pencilElements = document.querySelectorAll(".bi-pencil");
    pencilElements.forEach((pencil) => {
      pencil.addEventListener("click", (event) => {
          const listItemElement = event.target.closest('.list-group-item');
          
          if (!listItemElement) {
            return;
          }
  
          let textElement = listItemElement.querySelector("div").querySelector("div").textContent;
          let listElement = listItemElement.querySelector("div").querySelector("div");
          let parts = convertToMealAndCalories(textElement);
          const meal = document.getElementById("meal-input");
          const calories = document.getElementById("calories-input");
          meal.value = parts[0];
          calories.value = parts[1];
  
          cardState.changeState(new EditState());
          cardState.updateCard();
  
          const updateMealButton = document.querySelector(".update-meal-btn");
          updateMealButton.addEventListener("click", ()=>{
              const meal2 = document.getElementById("meal-input").value;
              const calories2 = document.getElementById("calories-input").value;
              listElement.innerHTML = `
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong>${meal2}:</strong> ${calories2} Calories
                </div>
              </div>`;
              total -= (parseInt(parts[1])-parseInt(calories2));
              InputChanger.clearInputs();
              MealModule.updateTotal(total);
          })

          const deleteMealButton = document.querySelector(".delete-meal-btn");
          deleteMealButton.addEventListener("click", ()=>{
            listItemElement.remove();
            InputChanger.clearInputs();
            total -= parseInt(parts[1]);
            MealModule.updateTotal(total);

          })
  
          attachEventListeners(); // Reattach the event listeners after updating the card
      });
    });
  }

const cardState = new CardState();

cardState.changeState(new DefaultState());
cardState.updateCard();

function attachEventListeners() {

  const addMealButton = document.querySelector(".button-meal");
  if (addMealButton) {
    addMealButton.addEventListener("click", () => {
      let tempMealVar = document.getElementById("meal-input");
      let tempCaloriesVar = document.getElementById("calories-input");

      if (tempCaloriesVar.value === "" || tempMealVar.value === "") {
        alert("Please fill both inputs!");
      } else {
        const meal = MealModule.createMeal(tempMealVar.value, tempCaloriesVar.value);
        meal.addMealToList();
        total += parseInt(tempCaloriesVar.value);
        MealModule.updateTotal(total);
        InputChanger.clearInputs();
        handlePencilClick(); // Attach the event listener for the pencil element
      }
    });
  }

  const clearAll = document.querySelector(".btn-clear-all");
  if (clearAll) {
    clearAll.addEventListener("click", () => {
      total = 0;
      cardState.changeState(new DefaultState());
      cardState.updateCard();
      attachEventListeners(); // Reattach the event listeners after updating the card
    });
  }

  const backButton = document.querySelector(".back-btn");
  if(backButton){
    backButton.addEventListener("click", ()=>{
        cardState.changeState(new StepBackState());
        cardState.updateCard();
        attachEventListeners(); // Reattach the event listeners after updating the card
    })
  }

 
}

attachEventListeners();


 


