var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");

console.log(txtinput)

function clickHandler()
{
    console.log("clicked");
    console.log("input", txtinput.value);
};
btnTranslate.addEventListener("click", clickHandler)