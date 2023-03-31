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