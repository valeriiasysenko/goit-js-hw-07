function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const onButtHandler = ()=> {
  const amount = input.value.trim();
  if(!isNaN(amount)&& amount >= 1 && amount <= 100){
    createBoxes(amount);
    input.value = '';
  }
};
buttonCreate.addEventListener("click", onButtHandler);
function createBoxes(amount){
  const box = [];
  let size = 30;
  for(let i = 1 ; i <= amount; i++){
    const divElem = document.createElement("div");
    divElem.style.width = `${size}px`;
    divElem.style.height = `${size}px`;
    divElem.style.backgroundColor = getRandomHexColor();
    box.push(divElem);
    size += 10;
  }
  boxes.innerHTML = "";
  boxes.append(...box);
}
const onButtDestroys = ()=> {
  boxes.innerHTML = "";
};
buttonDestroy.addEventListener("click", onButtDestroys);


