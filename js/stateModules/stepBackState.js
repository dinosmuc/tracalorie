class StepBackState {

  createElement(tag, attributes) {
    const element = document.createElement(tag);
  
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
    }
  
    return element;
  }

    updateCard() {
      const rowElement = document.querySelector(".row");

      rowElement.innerHTML = ``;

      const colElement = this.createElement("div", { class: "col-4" });

      rowElement.appendChild(colElement);

      const buttonMeal = this.createElement("button", { class: "btn btn-primary button-meal" });
      buttonMeal.innerHTML = `+ ADD MEAL`;

      colElement.appendChild(buttonMeal);
    }
  }


  export {StepBackState};