document.getElementById("con-btn").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const resultElement = document.getElementById("result");

    if (isNaN(amount) || fromCurrency === "select" || toCurrency === "select") {
        resultElement.innerText = "Please enter a valid amount and select currencies.";
        return;
    }

    // Simple conversion logic (replace with real conversion logic or API call)
    const conversionRate = 0.85; // Example rate: 1 USD to 0.85 EUR
    const convertedAmount = (amount * conversionRate).toFixed(2);

    resultElement.innerText = `${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency} `
});
