// Select all elements of interest.

const countNumber = document.querySelector("#count");
const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const increaseBtn = document.querySelector("#increase");

// Initialize variables.
let counter,
  count = 0;

// functionality

decreaseBtn.addEventListener("click", updateCount);
increaseBtn.addEventListener("click", updateCount);
resetBtn.addEventListener("click", updateCount);
document.addEventListener("DOMContentLoaded", () => {
  countNumber.innerText = localStorage.getItem("count");
});

if (!localStorage.getItem("count")) {
  localStorage.setItem("count", 0);
}
function updateCount(e) {
  if (e.target.id === "decrease") {
    counter = localStorage.getItem("count");
    counter--;
    countNumber.innerText = counter;
    localStorage.setItem("count", counter);
  } else if (e.target.id === "reset") {
    counter = localStorage.getItem("count");
    counter -= counter;
    countNumber.innerText = count;
    localStorage.setItem("count", counter);
  } else if (e.target.id === "increase") {
    counter = localStorage.getItem("count");
    counter++;
    countNumber.innerText = counter;
    localStorage.setItem("count", counter);
  }
  if (counter < 0) {
    countNumber.style.color = "red";
  } else {
    countNumber.style.color = "rgb(2, 2, 27)";
  }
}
