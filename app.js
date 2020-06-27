//text output
let text = document.querySelector('#output');
const bill = document.querySelector('#bill-amount');


loadAllEventListeners()
//event listener
function loadAllEventListeners () {

$('.btn').click(processing);


}

//functions



function calculateBill () {

  let billAmount = Number(document.querySelector('#bill-amount').value);
  let tipAmount = document.querySelector('select').value;
  tipAmount = Number(tipAmount.slice(0,2))/100;

  let tip = billAmount * tipAmount;
  let total = (billAmount+tip).toFixed(2);
  text.innerHTML = `Tip amount: \$${tip.toFixed(2)}<br> Total Bill:\$${total}`;
  bill.value = '';
  
  

}
function processing () {
   $('.bill-container').hide();
   $('.tip-container').hide();
   
    $("#output").text('processing...')
    setTimeout(function (){
        calculateBill();
    },2000)
    

    
}





