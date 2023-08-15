/*
1. add event handler with the widthraw button
2. get the widthraw amount from the widthraw field 
2.5. also make sure to canvat the input into a number by using parseFlot
3. get previous widthraw amount 
4. calculate total widthraw amount
4.5. set the total widthraw amount 
5. get the previous balance total
6. calculate new balance total
6.5. set the new balance total 
7. clear the input field  
*/

// step-1:

document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step-2.
  const withdrawField = document.getElementById("withdraw-field");
  const newWidthrawAmountString = withdrawField.value;
  newWidthrawAmount = parseFloat(newWidthrawAmountString);
  // step-7:
  withdrawField.value = "";
  if (isNaN(newWidthrawAmount)) {
    alert("please provid a valid number");
    return;
  }
  //   step-3:
  const widthrawTotalElement = document.getElementById("widthraw-total");
  const previousWidthrawTOtalString = widthrawTotalElement.innerText;

  const previousWidthrawTOtal = parseFloat(previousWidthrawTOtalString);

  // step-5:
  const balanceTotalElement = document.getElementById("Balances-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;

  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  if (newWidthrawAmount > previousBalanceTotal) {
    alert("Baap er bank a eto taka nai");
    return;
  }
  //   step-4:
  const currentWidthrawTotal = previousWidthrawTOtal + newWidthrawAmount;
  widthrawTotalElement.innerText = currentWidthrawTotal;
  // step-6:
  const newBalanaceTotal = previousBalanceTotal - newWidthrawAmount;
  balanceTotalElement.innerText = newBalanaceTotal;
});
