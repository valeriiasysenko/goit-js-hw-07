const categories = document.querySelector("#categories");
const numCategories = categories.children;
function numbersCategories() {
  return `Number of categories: ${numCategories.length}`;
}
console.log(numbersCategories());

Array.from(numCategories).forEach((item) => {
  const titlesName = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;


  console.log(`Category: ${titlesName}`);
  console.log(`Elements: ${elements}`);
});