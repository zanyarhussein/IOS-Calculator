var tBox = document.querySelector(".text-box input");
var eOp = document.querySelector("#equal");
var cOp = document.querySelector(".clear");

tBox.value = "0";

for (var i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        let lastChar = tBox.value.slice(-1);

        if (this.innerText >= '0' && this.innerText <= '9') {
            if (tBox.value === "0") {
                tBox.value = this.innerText;
            } else {
                tBox.value += this.innerText;
            }
        }
        else if (["+", "-", "*", "/"].includes(this.innerText)) {
            if (tBox.value !== "0" && !["+", "-", "*", "/"].includes(lastChar)) {
                tBox.value += this.innerText;
            }
        }
    });
}

function calculate() {
    let exp = tBox.value;

    if (/[\+\-\*\/]$/.test(exp)) {
        exp = exp.slice(0, -1);
    }

    try {
        tBox.value = eval(exp);
    } catch {
        tBox.value = "0";
    }
}

cOp.addEventListener("click", function () {
    tBox.value = "";
    if (tBox.value === "") {
        tBox.value = "0";
    }
});
