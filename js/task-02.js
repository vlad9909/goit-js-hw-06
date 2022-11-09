const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ingredientsListRef = document.querySelector("#ingredients");
// console.log(ingredientsListRef);

// ingredients.forEach((ingredient) => {
//   const items = document.createElement("li");
//   items.textContent = ingredient;
//   console.log(items);
//   items.classList.add("item");
//   ingredientsListRef.append(items);
// });

const ingredientsListRef = document.querySelector(`#ingredients`);
const itemElement = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("itemEl");
  return element;
});
console.log(itemElement);
ingredientsListRef.append(...itemElement);
