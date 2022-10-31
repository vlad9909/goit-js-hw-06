let counterValue = 0;

const btnMinusRef = document.querySelectorAll("button")[0];
const btnPlusRef = document.querySelectorAll("button")[1];

btnMinusRef.addEventListener("click", () => {
  counterValue = counterValue - 1;
  // console.log(counterValue);
  const counterSpanRef = document.querySelector("#value");
  counterSpanRef.textContent = counterValue;
});

btnPlusRef.addEventListener("click", () => {
  counterValue += 1;
  // console.log(counterValue);
  const counterSpanRef = document.querySelector("#value");
  counterSpanRef.textContent = counterValue;
});
