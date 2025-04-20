const theme1 = document.querySelector(".calculator-theme1");
const theme2 = document.querySelector(".calculator-theme2");
const theme3 = document.querySelector(".calculator-theme3");

const themeBtn1 = document.querySelector("#theme-btn1-main");
const themeBtn2 = document.querySelector("#theme-btn2-main");
const themeBtn3 = document.querySelector("#theme-btn3-main");

theme2.style.display = "none";
theme3.style.display = "none";

themeBtn1.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  theme1.style.display = "block";
  theme2.style.display = "none";
  theme3.style.display = "none";
});

themeBtn2.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
  theme1.style.display = "none";
  theme2.style.display = "block";
  theme3.style.display = "none";
});

themeBtn3.addEventListener("click", function () {
  document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
  theme1.style.display = "none";
  theme2.style.display = "none";
  theme3.style.display = "block";
});
