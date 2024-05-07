document.addEventListener("DOMContentLoaded", (event) => {
  let quantityInput = document.querySelector("#quantity");
  let minusButton = document.querySelector(".mins");
  let plusButton = document.querySelector(".plus");

  minusButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });

  plusButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (quantityInput.value < 10) {
      quantityInput.value = parseInt(quantityInput.value) + 1;
    }
  });
});
