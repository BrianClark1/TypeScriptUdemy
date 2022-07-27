"use strict";
console.log('HELLLOOO!!!! HUNGRY YES');
//Dom is a complicated OBJ, interface that extends etc.
//If there is no uncertantity at runtime add an exclamation point after getelementById, asserts that its not null, remove the quesiton mark after the button 
const btn = document.getElementById("btn");
console.log(btn);
//Question mark optional chaining operator
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    // alert("CLICKED!!")
    alert(input.value);
    input.value = "";
});
//Type Casting TS isnt smart enough to deduce the specific DOM type 
const input = document.getElementById("todoinput");
