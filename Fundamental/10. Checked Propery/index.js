// Get the checkbox and payment method elements by their IDs
const myCheckbox = document.getElementById("myCheckbox");
const myVisa = document.getElementById("myVisa");
const myPaypal = document.getElementById("myPaypal");
const myMasterCard = document.getElementById("myMasterCard");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

// Add an event listener to the submit button
mySubmit.onclick = function() {
    // Check if the checkbox is checked
    if (myCheckbox.checked) {
        subResult.textContent = `You are subscribed`;
    } else {
        subResult.textContent = `You are not subscribed`;
    }

    // Check which payment method is selected
    if (myVisa.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if (myPaypal.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } else if (myMasterCard.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else {
        paymentResult.textContent = `You are not paying`;
    }
}

