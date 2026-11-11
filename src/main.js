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

const senyakner = document.querySelectorAll(".divsenyakneriqanak button");

senyakner.forEach((button) => {
  button.addEventListener("click", () => {
    senyakner.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const arjeqner = document.querySelectorAll(".divarjeqner p.value");

arjeqner.forEach((arjeq) => {
  arjeq.addEventListener("click", () => {
    arjeqner.forEach((item) => {
      item.classList.remove("active");
    });

    arjeq.classList.add("active");
  });
});

const sahanguycner = document.querySelectorAll(".divsahanguycneriqanak button");

sahanguycner.forEach((button) => {
  button.addEventListener("click", () => {
    sahanguycner.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const loxavazan = document.querySelectorAll(".divloxavazanihamar button");

loxavazan.forEach((button) => {
  button.addEventListener("click", () => {
    loxavazan.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});

const erkuxakan = document.querySelectorAll(".divverjierkuban img");

erkuxakan.forEach((img) => {
  img.addEventListener("click", () => {
    erkuxakan.forEach((item) => {
      item.classList.remove("active");
    });

    img.classList.add("active");
  });
});