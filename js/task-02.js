const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");
const markup = [];
ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.className = "item";
  markup.push(li);
});
container.append(...markup);
