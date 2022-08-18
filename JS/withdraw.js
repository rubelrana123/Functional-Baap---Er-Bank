document.getElementById('withdraw-btn').addEventListener('click', function () {
	const withdrawField = getInputFieldById('withdrawField');
	// console.log(withdrawField);

	const previouswithdrawBalance = getTotalBalanceById('withdraw-balance');
	// console.log(previouswithdrawBalance);

	const newwithdrawBalance = withdrawField + previouswithdrawBalance;

	getElementBalanceById('withdraw-balance', newwithdrawBalance);

	const previousTotalAmount = getTotalBalanceById('total-balance');
	const newTotalBalance = previousTotalAmount - withdrawField;
	getElementBalanceById('total-balance', newTotalBalance);
});
