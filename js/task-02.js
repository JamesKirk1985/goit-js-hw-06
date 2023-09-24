const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const container = document.querySelector("#ingredients");
ingredients.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = elem;
  li.className = "item";
  container.append(li);
  console.dir(li);
});
