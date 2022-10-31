const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");
console.log(ingredientsListRef);

ingredients.forEach((ingredient) => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  console.log(items);
  items.classList.add("item");
  ingredientsListRef.append(items);
});
