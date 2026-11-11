const btnminus = document.querySelector(".Math")
const btnminus2 = document.querySelector(".Math3")
const btnplus = document.querySelector(".Math2")
const btnplus2 = document.querySelector(".Math4")
const tiv = document.querySelector(".mtqtiv")
const tiv2 = document.querySelector(".mtqtiv2")

btnplus.addEventListener("click", () => {
  tiv.value++
})

btnminus.addEventListener("click", () => {
  if (tiv.value > 1) {
    tiv.value--
  }
})

btnplus2.addEventListener("click", () => {
  tiv2.value++
})

btnminus2.addEventListener("click", () => {
  if (tiv2.value > 1) {
    tiv2.value--
  }
})

const buttons = document.querySelectorAll(".divgisherakac button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});