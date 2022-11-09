function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnRef = document.querySelector(".change-color");
// console.log(btnRef);
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector(".color");
btnRef.addEventListener("click", (event) => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
  console.log(color);
  console.log(color);
});
