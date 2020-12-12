const circle = document.getElementById("circle");
const upbtn = document.getElementById("upbtn");
const downbtn = document.getElementById("downbtn");
let rotateValue = circle.style.transform;
let rotateSum;

upbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

downbtn.onclick = function () {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
