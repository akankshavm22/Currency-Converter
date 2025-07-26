
document.addEventListener('DOMContentLoaded', () => {
    const amountInput = document.getElementById('amount');
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const convertBtn = document.getElementById('convert');
    const resetBtn = document.getElementById('reset');
    const resultDiv = document.getElementById('result');
  
    // Currency data: Code -> {name, flag}
    const currencyData = {
      "USD": { name: "United States Dollar", flag: "🇺🇸" },
      "EUR": { name: "Euro", flag: "🇪🇺" },
      "GBP": { name: "British Pound", flag: "🇬🇧" },
      "INR": { name: "Indian Rupee", flag: "🇮🇳" },
      "JPY": { name: "Japanese Yen", flag: "🇯🇵" },
      "AUD": { name: "Australian Dollar", flag: "🇦🇺" },
      "CAD": { name: "Canadian Dollar", flag: "🇨🇦" },
      "CNY": { name: "Chinese Yuan", flag: "🇨🇳" },
      "BRL": { name: "Brazilian Real", flag: "🇧🇷" },
      "ZAR": { name: "South African Rand", flag: "🇿🇦" },
      "RUB": { name: "Russian Ruble", flag: "🇷🇺" },
      "SGD": { name: "Singapore Dollar", flag: "🇸🇬" },
      "NZD": { name: "New Zealand Dollar", flag: "🇳🇿" },
      "CHF": { name: "Swiss Franc", flag: "🇨🇭" },
      "KRW": { name: "South Korean Won", flag: "🇰🇷" },
      "SEK": { name: "Swedish Krona", flag: "🇸🇪" },
      "NOK": { name: "Norwegian Krone", flag: "🇳🇴" },
      "MXN": { name: "Mexican Peso", flag: "🇲🇽" },
      "THB": { name: "Thai Baht", flag: "🇹🇭" },
      "AED": { name: "UAE Dirham", flag: "🇦🇪" }
      // Add more if needed
    };
  
    const exchangeRates = {
      "USD": 1.00, "EUR": 0.90, "GBP": 0.77, "INR": 83.20, "JPY": 155.50,
      "AUD": 1.49, "CAD": 1.33, "CNY": 7.20, "BRL": 5.10, "ZAR": 18.30,
      "RUB": 92.00, "SGD": 1.34, "NZD": 1.61, "CHF": 0.87, "KRW": 1320.00,
      "SEK": 10.85, "NOK": 10.55, "MXN": 16.90, "THB": 36.10, "AED": 3.67
    };
  
    // Populate dropdowns
    Object.keys(exchangeRates).forEach(code => {
      const info = currencyData[code] || { name: code, flag: "" };
      const optionText = `${info.flag} ${info.name} (${code})`;
  
      const optionFrom = new Option(optionText, code);
      const optionTo = new Option(optionText, code);
  
      fromSelect.appendChild(optionFrom);
      toSelect.appendChild(optionTo);
    });
  
    convertBtn.addEventListener('click', () => {
      const amount = parseFloat(amountInput.value);
      const from = fromSelect.value;
      const to = toSelect.value;
  
      if (isNaN(amount) || !from || !to) {
        alert("Please enter a valid amount and select both currencies.");
        return;
      }
  
      const usdAmount = amount / exchangeRates[from];
      const converted = usdAmount * exchangeRates[to];
  
      resultDiv.textContent = `${converted.toFixed(2)} ${to}`;
    });
  
    resetBtn.addEventListener('click', () => {
      amountInput.value = '';
      fromSelect.selectedIndex = 0;
      toSelect.selectedIndex = 0;
      resultDiv.textContent = '0.00';
    });
  });
  