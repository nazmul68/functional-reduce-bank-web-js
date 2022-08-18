/*
1. add withdraw button event handler
2. get new withdraw amount by using getInputFieldValueById function
3. get previous withdraw total by using getTextElementValueById function
4. calculate current withdraw total & set value
5. get previous balance total
6. calculate new balance total 
7. set new balance total
*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        alert('Please Provide a valid number');
        return;
    }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if(newWithdrawAmount>previousBalanceTotal){
        alert('Insufficient Balance');
        return;
    }
    setTextElementValueById('withdraw-total',currentWithdrawTotal);//fact:input validation

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})