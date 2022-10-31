const inputRef = document.querySelector("#validation-input");
// console.log(inputRef);
const inputLength = inputRef.getAttribute("data-length");
// console.log(inputLength);
function verifLengthName(event) {
  if (event.currentTarget.value.length >= inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
  }
}
inputRef.addEventListener("blur", verifLengthName);
