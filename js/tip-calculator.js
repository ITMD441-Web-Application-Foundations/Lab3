function tipCalculator() {
    // Variables
    // Explicitly convert string types to nums
    let subTotal = document.getElementById("billTotal").value;
    let tipPercentage = document.getElementById("tipSlider").value;

    // Calculate
    if (subTotal < 0) { // Handle negative values
        document.getElementById("tipPercentage").value = `Error: Negative Value`;
        document.getElementById("tipAmount").value = `Error: Negative Value`;
        document.getElementById("finalTotal").value = `Error: Negative Value`;
    } else if (isNaN(subTotal)) { // Handle non-numerical values
        document.getElementById("tipPercentage").value = `Error: Non-Numerical Value`;
        document.getElementById("tipAmount").value = `Error: Non-Numerical Value`;
        document.getElementById("finalTotal").value = `Error: Non-Numerical Value`;
    } else {
        let tipAmount = parseFloat(subTotal) * parseInt(tipPercentage) * .01
        let finalTotal = parseFloat(subTotal) + tipAmount

        // Display values
        document.getElementById("tipPercentage").value = `${tipPercentage} %`;
        document.getElementById("tipAmount").value = `$ ${tipAmount.toFixed(2)}`;
        document.getElementById("finalTotal").value = `$ ${finalTotal.toFixed(2)}`;
    }
}