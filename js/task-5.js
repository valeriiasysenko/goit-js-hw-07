function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".js-change-color");
const span = document.querySelector(".js-color");
const body = document.querySelector("body");
const onClickHandler = ()=> {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
};
button.addEventListener("click",onClickHandler);
