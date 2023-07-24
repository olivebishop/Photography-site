let num1 = document.getElementById("click1");
let num2 = document.getElementById("click2");
let num3 = document.getElementById("click3");
let num4 = document.getElementById("click4");
let num5 = document.getElementById("click5");

num1.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/blues.jfif)";
  bgchange.style.transition = "all 2s";
});

num2.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/girlsad.jfif)";
  bgchange.style.transition = "all 2s";
});

num3.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/reality.jpg)";
  bgchange.style.transition = "all 2s";
});

num4.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/manknown.jpg)";
  bgchange.style.transition = "all 2s";
});

num5.addEventListener("click", () => {
  bgchange.style.backgroundImage = "url(page/girlonafro.jpeg)";
  bgchange.style.transition = "all 2s";
});
