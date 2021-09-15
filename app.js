var btnTranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//function errorHandler(error)
//{
    //console.log("error occured", error);
    //alert("somethng wrong with server please try after sometime")
//}
function getTranslationURL(text)
{
    return serverURL + "?" + "text =" + text
}

//console.log(txtinput)
//console.log(outputDiv)


function clickHandler()
{


    var inputText= txtinput.value;
    fetch(getTranslationURL(inputText))
    .then(Response => Response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText; 
    })
    //.catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)