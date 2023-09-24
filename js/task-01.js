const numOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories:${numOfCategories.length}`);
console.log("");
Array.from(numOfCategories).forEach((elem) => {
  console.log(`Category: ${elem.children[0].textContent}`);
  console.log(`Elements: ${elem.children[1].children.length}`);
  console.log("");
});
