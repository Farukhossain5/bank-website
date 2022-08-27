document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const depositTotalElement = document.getElementById('deposit-total');
    const previusDepositTotalString = depositTotalElement.innerText;
    const previusDepositTotal = parseFloat(previusDepositTotalString);
    const currentDepositTotal = previusDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceField = document.getElementById('balance-total');
    const previusBalanceString = balanceField.innerText;
    const previusBalance = parseFloat(previusBalanceString);
    const currentBalanceTotal = previusBalance + newDepositAmount;
    balanceField.innerText = currentBalanceTotal;

    
})