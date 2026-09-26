function calculateGroceryTotal(amount1, amount2, amount3) {
  const total = Number(amount1) + Number(amount2) + Number(amount3);
  return total;
}

const calculateButton = document.getElementById('calculateBtn');

calculateButton.addEventListener('click', function () {
  const grocery1 = document.getElementById('grocery1').value;
  const grocery2 = document.getElementById('grocery2').value;
  const grocery3 = document.getElementById('grocery3').value;

  const totalAmount = calculateGroceryTotal(grocery1, grocery2, grocery3);
  document.getElementById('result').textContent = 'Total grocery expenditure: $' + totalAmount.toFixed(2);
});
