function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(".change-color");
// console.log(btnRef);
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
btnRef.addEventListener("click", (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = getRandomHexColor();
});
