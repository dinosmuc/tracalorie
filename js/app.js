import InputChanger from './inputModule.js';
import { MealModule } from './mealModule.js';

let total = 0;


document.addEventListener('DOMContentLoaded', () => {

  InputChanger.changeInputsColor();

  const addMealButton = document.querySelector(".button-meal");
  addMealButton.addEventListener("click", ()=>{

    let tepMealVar = document.getElementById("meal-input");
    let tempCaloriesVar = document.getElementById("calories-input");

    if(tempCaloriesVar.value === "" || tepMealVar.value === ""){
      alert("Please fill both inputs!");
    }else{
      const meal = MealModule.createMeal(tepMealVar, tempCaloriesVar);
      meal.addMealToList();
      total += parseInt(tempCaloriesVar.value);
      MealModule.updateTotal(total);
      InputChanger.clearInputs();
    }

  })

  const clearAllButton = document.querySelector(".btn-clear-all");
  clearAllButton.addEventListener("click", ()=>{

    MealModule.clearMeals();
    total = 0;
    MealModule.updateTotal(total);
  })


 



});





