var btnTranslate=document.querySelector(".btn-translate");
var outputDiv=document.querySelector(".output");
var txtInput=document.querySelector("#txt-input");
// console.log(btnTranslate);
// console.log(outputDiv);
// console.log(txtInput);
var serverURL='https://api.funtranslations.com/translate/minion.json';
function getTranslationURL(input){
    return serverURL+'?text='+input
}
function errorHandler(error){
    console.log('error occured',error);
}
function clickHandler(){
    var inputText=txtInput.value;
    console.log(inputText);
    fetch(getTranslationURL(inputText))
    .then (response=> response.json())
    .then(json =>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })

}
btnTranslate.addEventListener('click',clickHandler);