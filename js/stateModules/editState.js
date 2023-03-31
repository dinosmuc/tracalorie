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