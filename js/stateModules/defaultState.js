import InputChanger from '../componentModules/inputModule.js';
  

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
      InputChanger.changeInputsColor();
    }
  }

  


export { CardState,
         DefaultState, };