function getRandomHexColor() {
  const bodyColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
   span.textContent = bodyColor;
  return bodyColor;
}
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");
const onClickHandler = () => {
  body.style.backgroundColor = getRandomHexColor();
};
button.addEventListener("click",onClickHandler);
