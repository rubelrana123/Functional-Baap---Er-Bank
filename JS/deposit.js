document.getElementById('deposit-btn').addEventListener('click', function () {
  const depositField = getInputFieldById('depositField');
  // console.log(depositField);

  const previousDepositBalance = getTotalBalanceById('deposit-balance');
  // console.log(previousDepositBalance);

  const newdepositBalance = depositField + previousDepositBalance;

  getElementBalanceById('deposit-balance', newdepositBalance);


  const previousTotalAmount = getTotalBalanceById('total-balance');
  const newTotalBalance = previousTotalAmount + depositField;
  getElementBalanceById('total-balance', newTotalBalance);



})