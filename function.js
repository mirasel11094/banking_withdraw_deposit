//input deposit
function getInputValue(fieldId){
    const inputfieldId = document.getElementById(fieldId);
    const valueInText = inputfieldId.value;
    const valu = parseFloat(valueInText);
    inputfieldId.value = '';
    return valu;
    
}
//balance kom uthano jabena
function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

//input deposit
function updateTotal(fieldId, amount) {
    // console.log(fieldId, amount);
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInTex = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInTex);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    // totalTag.innerText = newTotal;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;

}
//input deposit
document.getElementById('deposit-button').addEventListener('click', function(){
const amount = getInputValue('deposit-input');
// console.log(amount);
if (amount > 0){
    updateTotal('deposit-total', amount);
updateBalance(amount, true);
}

});
// update Balance
function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInTex = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInTex);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
         newBalance = previousBalance - amount;
    }
    // balanceTag.innerText = newBalance;
    document.getElementById('balance-total').innerText = newBalance;
      
}
//handle whitdrol
document.getElementById('withdraw-button').addEventListener('click', function (){
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
   if (amount > 0 && amount <= balance) {
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false);
   }
});
