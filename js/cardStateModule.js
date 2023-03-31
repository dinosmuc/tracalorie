  import { MealModule } from './mealModule.js';
  import InputChanger from './inputModule.js';


  class CardState {
    constructor() {
      this.state = new DefaultState();
    }

    changeState(state) {
      this.state = state;
    }

    updateCard() {
      this.state.updateCard();
    }
  }
  class DefaultState {
    constructor() {
      this.total = 0;
    }

    addEventListeners() {
      const addMealButton = document.querySelector(".button-meal");
      addMealButton.addEventListener("click", ()=>{

        console.log(document.getElementById("meal-input").value);
        
        
        let tempMealVar = document.getElementById("meal-input");
        let tempCaloriesVar = document.getElementById("calories-input");

        if(tempCaloriesVar.value === "" || tempMealVar.value === ""){
          alert("Please fill both inputs!");
        }else{
          const meal = MealModule.createMeal(tempMealVar.value, tempCaloriesVar.value);
          meal.addMealToList();
          this.total += parseInt(tempCaloriesVar.value);
          MealModule.updateTotal(this.total);
          InputChanger.clearInputs();
        }
        
      });

      const clearAll = document.querySelector(".btn-clear-all")
      clearAll.addEventListener("click",()=>{
        this.resetAndClearAll();
      })


    }

    resetAndClearAll() {
      this.total = 0;
      this.updateCard();
      console.log(document.getElementById("meal-input").value);
      
    }

    updateCard() {
      const body = document.querySelector("body");
      body.innerHTML = `<nav class="navbar navbar-blue custom-navbar d-flex justify-content-center">
                          <span class="navbar-brand mx-auto h1 text-center">Tracalorie</span>
                          <button class="btn btn-primary btn-clear-all">CLEAR ALL</button>
                          </nav>
                          <div class="card mx-auto">
                              <h5 class="add-meal">Add meal / Food Item</h5> 
                              <div class="meal-calories">
                                  <label for="meal-input" class="meal-label">Meal</label>
                                  <label for="calories-input" class="calories-label">Calories</label>
                                  <br>
                                  <input type="text" name="meal" class="meal-input" id="meal-input" placeholder="Add item">
                                  <input type="text" name="calories" class="calories-input" id="calories-input" placeholder="Add calories">
                                  <br>
                              </div>
                              <div class="row">
                                  <div class="col-4">
                                      <button class="btn btn-primary button-meal">+ ADD MEAL</button>
                                  </div>
                              </div>
                          </div>
                          <div class="total-calories">
                              <br>
                              <h1 class="total">Total calories: 0</h1>
                          </div>
                          <div class="meal-list">
                              <ul class="list-group">
                              </ul>
                          </div>
                        `
        this.addEventListeners();
        InputChanger.changeInputsColor();
    }
  }


  class StepBackState {
    updateCard() {
      const rowElement = document.querySelector(".row");

      rowElement.innerHTML = ``;

      const colElement = createElement("div", { class: "col-4" });

      rowElement.appendChild(colElement);

      const buttonMeal = createElement("button", { class: "btn btn-primary button-meal" });
      buttonMeal.innerHTML = `+ ADD MEAL`;

      colElement.appendChild(buttonMeal);
    }
  }

  class EditState {

    updateCard() {
      const rowElement = document.querySelector(".row");

      const colElement = document.querySelector(".col-4");

      const buttonMeal = document.querySelector(".button-meal");

      buttonMeal.remove();
      colElement.remove();

      rowElement.innerHTML = `
      <div class="container">
        <div class="row">
            <div class="col-4">
                <button class="btn btn-warning new-btn update-meal-btn">UPDATE MEAL</button>
            </div>
            <div class="col-4">
                <button class="btn btn-danger new-btn delete-meal-btn">DELETE MEAL</button>
            </div>
            <div class="col-4 text-end">
                <button class="btn btn-secondary new-btn back-btn">BACK</button>
            </div>
        </div>
      </div>
      `
     }
  }

function createElement(tag, attributes) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  return element;
}

export { CardState,DefaultState,StepBackState,EditState };