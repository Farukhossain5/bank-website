document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previusWithdrawTotalString = withdrawTotalElement.innerText;
    const previusWithdrawtotal = parseFloat(previusWithdrawTotalString);
    const currentWithDrawTotal = previusWithdrawtotal+newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;
    const balanceField = document.getElementById('balance-total');
    const previusBalanceString = balanceField.innerText;
    const previusBalance = parseFloat(previusBalanceString);
    const currentBalanceTotal = previusBalance - newWithdrawAmount;
    balanceField.innerText = currentBalanceTotal;

    withdrawInputField.value = '';
})
