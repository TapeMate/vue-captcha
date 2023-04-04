"use strict";
// value out of array in vue later, {{ notation }}, more then one value.
const solution = "blue";
const span = document.querySelector("#word");
const input = document.querySelector("#captcha");
const button = document.querySelector("#submit");
const botValue = span.innerHTML;
let userValue = "";
console.log("script implemented.");

const getUserValue = () => {
  userValue = (botValue.slice(1) + botValue.charAt(0)).toLowerCase();
  console.log(userValue);
};

getUserValue();

const setUserValue = () => {
  span.innerHTML = userValue.toUpperCase();
};

setUserValue();

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (solution === input.value.toLowerCase()) {
    console.log("success");
  } else {
    console.log("fail");
  }
});
