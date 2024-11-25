const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const number = document.getElementById("number");

let c = 0;

decrease.onclick = function () {
    c--;
    number.textContent = c;
}
increase.onclick = function () {
    c++;
    number.textContent = c;
}
reset.onclick = function () {
    c = 0;
    number.textContent = c;
}