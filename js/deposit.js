/*
1. add deposit button event handler
2. get deposit field value by using getInputFieldValueById funtion
3. get previous deposit value by using getTextElementValueById function
4. calculate current deposit value & set value the value by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total 
7. set new balance total by using setTextElementValueById function

*/

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    if(isNaN(newDepositAmount)){
        alert('Please Provide a valid number');
        return;
    }
    const previousDepositTotal = getTextElementValueById('deposit-total');
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total',currentDepositTotal);
    const previousBalanceTotal= getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})