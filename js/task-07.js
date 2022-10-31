const rangeRef = document.querySelector("#font-size-control");
const txtSpanRef = document.querySelector("#text");
// console.log(txtSpanRef);
rangeRef.addEventListener("input", (event) => {
  txtSpanRef.style.fontSize = event.target.value + "px";
  //   console.log(event.target.value);
  //   console.log(txtSpanRef.style.fonеSize);
});
