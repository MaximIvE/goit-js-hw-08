const form = document.querySelector('.feedback-form');

let dataJson = localStorage.getItem("feedback-form-state");
const inputData = dataJson ? JSON.parse(dataJson) : {email: "", message: ""};

const _ = require('lodash');

if (inputData.email) { form[0].value = inputData.email};
if (inputData.message) { form[1].value = inputData.message};

form.addEventListener('input', _.throttle((e)=>{
    const element = e.target;

    //записуємо дані в об'єкт
    inputData[element.name] = element.value;

    //переводимо inputData в Json та записуємо в Local Storage
    const dataJson = JSON.stringify(inputData);
    localStorage.setItem("feedback-form-state", dataJson);
}, 500));

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(inputData);
    localStorage.removeItem("feedback-form-state");
    form.reset();
});
