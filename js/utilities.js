/*
 1. get Input Field amount by using getInputFieldValueById function
*/
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = '';
    return inputFieldValue;
}

/*
  2. get previous deposit/withdraw balance by using getTextElementValueById function
*/ 
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueStr = element.innerText;
    const elementValue = parseFloat(elementValueStr);
    return elementValue;
}

/*
 3. set text element value by using setTextElementValueById fucntion
*/
function setTextElementValueById(elementId,newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




