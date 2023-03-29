const replaceCaloriesInput = () => {
    const oldCaloriesInput = document.getElementById("calories-input");
    if (oldCaloriesInput.getAttribute('type') !== 'number') {
        const newCaloriesInput = document.createElement("input");
        newCaloriesInput.type = "number";
        newCaloriesInput.min = 0;
        newCaloriesInput.step = 1;
        newCaloriesInput.classList.add("calories-input");
        newCaloriesInput.placeholder = "Add calories";
        newCaloriesInput.id = "calories-input";
        newCaloriesInput.addEventListener("focus", () => {
            newCaloriesInput.style.outline = "none";
            newCaloriesInput.style.borderBottomColor = "green";
            document.querySelector('.calories-label').style.color = "green";
        });
        newCaloriesInput.addEventListener("blur", () => {
            newCaloriesInput.style.borderBottomColor = "darkgray";
            document.querySelector('.calories-label').style.color = "darkgray";
        });
        oldCaloriesInput.parentNode.replaceChild(newCaloriesInput, oldCaloriesInput);
    }
}

const changeInputsColor = () => {
    const inputFields = document.querySelectorAll(".meal-calories input");
    const labels = document.querySelectorAll(".meal-calories label");

    inputFields.forEach((input, index) => {
        input.addEventListener("focus", (event) => {
            replaceCaloriesInput();
            event.target.style.borderBottomColor = "green";
            labels[index].style.color = "green";
        });

        input.addEventListener("blur", (event) => {
            event.target.style.borderBottomColor = "darkgray";
            labels[index].style.color = "darkgray";
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    changeInputsColor();
});