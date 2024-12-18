let rightbot1 = document.querySelectorAll(".rightbot1 .num");
let rightbot2 = document.querySelectorAll(".rightbot2 .num1");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      rightbot2.forEach((num1) => startCount(num1));
      rightbot1.forEach((num2) => startCount(num2));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}