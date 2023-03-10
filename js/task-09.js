
const buttonEl = document.querySelector(`.change-color`);
const spanColorEl = document.querySelector(`.color`);

buttonEl.addEventListener(`click`, getButtonClick);
spanColorEl.addEventListener(`span`, getButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



function getButtonClick(event) {
  const getRandomHexColorAndText = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColorAndText;
  spanColorEl.textContent = getRandomHexColorAndText;
}


// function getButtonClick(event) {
//   document.body.style.backgroundColor = getRandomHexColor(event.currentTarget);
//   spanColorEl.textContent = getRandomHexColor(event.currentTarget.value);
// }



