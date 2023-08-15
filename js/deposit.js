// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //   step-2: get the deposit amount from the input field

  const depositField = document.getElementById("deposit-field");
  const newDipositAmountString = depositField.value;
  const newDipositAmount = parseFloat(newDipositAmountString);

  // step-3: get the current deposit total
  //  for non-input (element other then input, textarea)use innertext to get the text

  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-4: get number to current total
  const currentDipositTotal = previousDepositTotal + newDipositAmount;
  // set the deposit total
  depositTotalElement.innerText = currentDipositTotal;

  // step-5: get balance current total
  const balanceTotalElement = document.getElementById("Balances-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate total current balance

  const currentTotalBalance = previousBalanceTotal + newDipositAmount;
  // ser the balance total
  balanceTotalElement.innerText = currentTotalBalance;
  // step-7: clear the deposit field
  depositField.value = "";
});
