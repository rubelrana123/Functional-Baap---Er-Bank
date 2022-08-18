function getInputFieldById(inputFIeldId) {
  const inputFieldElement = document.getElementById(inputFIeldId);
  const inputFieldString = inputFieldElement.value;
  const inputFieldAmount = parseFloat(inputFieldString);
  return inputFieldAmount;
}

function getTotalBalanceById(totalBalanceId) {
	const totalElement = document.getElementById(totalBalanceId);
	const totalElementString = totalElement.innerText;
	const totalElementAmount = parseFloat(totalElementString);
	return totalElementAmount;
}


function getElementBalanceById (elementId, newValue) {
  document.getElementById(elementId).innerText = newValue;
}