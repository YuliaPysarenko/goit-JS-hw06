/* <input type="text" id="name-input" placeholder="Please enter your name" />
    <h1>Hello, <span id="name-output">Anonymous</span>!</h1> 
    Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
    подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна
     отображаться строка "Anonymous".
    */

const inputEl = document.querySelector(`#name-input`);
const spanOutputEl = document.querySelector(`#name-output`);

inputEl.addEventListener(`input`, onInputNameChenge);


function onInputNameChenge(event) {
    if (inputEl.value) {
spanOutputEl.textContent = event.currentTarget.value;
    }

    else {
    spanOutputEl.textContent = `Anonymous`;
    }
    
}