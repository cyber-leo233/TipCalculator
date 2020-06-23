//text output
let text = document.querySelector('#output');
const bill = document.querySelector('#bill-amount');

//event listener
document.querySelector('.btn').addEventListener('click',calculateBill);

//function

function calculateBill () {

  let billAmount = Number(document.querySelector('#bill-amount').value);
  let tipAmount = document.querySelector('select').value;
  tipAmount = Number(tipAmount.slice(0,2))/100;

  let tip = billAmount * tipAmount;
  let total = (billAmount+tip).toFixed(2);
  text.innerHTML = `Tip amount: \$${tip.toFixed(2)}<br> Total Bill:\$${total}`;
  bill.value = '';
  
  

}



