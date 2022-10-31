const listRef = document.querySelectorAll(".item");
// console.log(listRef);
console.log("Number of categories: ", listRef.length);

listRef.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  const itemsRef = item.querySelectorAll("li");

  console.log("Elements: ", itemsRef.length);
});
