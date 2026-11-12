let buttons = document.querySelectorAll(".btnpoxer");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        buttons.forEach(function (btn) {
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        });

        button.style.backgroundColor = "black";
        button.style.color = "white";
    });
});