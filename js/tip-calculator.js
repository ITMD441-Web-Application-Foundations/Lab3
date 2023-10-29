function tipCalculator() {
    // Variables
    // Explicitly convert string types to nums
    let subTotal = parseFloat(document.getElementById("billTotal").value);
    let tipPercentage = parseInt(document.getElementById("tipSlider").value);

    // Calculate
    let tipAmount = subTotal * tipPercentage * .01
    let finalTotal = subTotal + tipAmount

    // Display values
    document.getElementById("tipPercentage").value = `${tipPercentage} %`;
    document.getElementById("tipAmount").value = `$ ${tipAmount.toFixed(2)}`;
    document.getElementById("finalTotal").value = `$ ${finalTotal.toFixed(2)}`;
}