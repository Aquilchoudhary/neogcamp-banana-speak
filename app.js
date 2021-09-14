var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

console.log(txtinput)
console.log(outputDiv)


function clickHandler()
{
    outputDiv.innerText="ajajajajajajajaj "+txtinput.value;
};
btnTranslate.addEventListener("click", clickHandler)