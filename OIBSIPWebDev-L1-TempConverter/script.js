function convertTemperature() {
    const inputVal = document.getElementById("tempInput").value;
    const unit = document.getElementById("unitSelect").value;
    const errorMsg = document.getElementById("errorMsg");
    const resultContainer = document.getElementById("resultContainer");

    // Clear previous errors/results
    errorMsg.textContent = "";
    resultContainer.classList.add("hidden");

    // Validation check for empty or non-numeric input
    if (inputVal === "" || isNaN(inputVal)) {
        errorMsg.textContent = "Please enter a valid numeric temperature!";
        return;
    }

    let temp = parseFloat(inputVal);
    let c = 0, f = 0, k = 0;

    if (unit === "celsius") {
        if (temp < -273.15) {
            errorMsg.textContent = "Temperature cannot be below Absolute Zero (-273.15°C)!";
            return;
        }
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    } else if (unit === "fahrenheit") {
        if (temp < -459.67) {
            errorMsg.textContent = "Temperature cannot be below Absolute Zero (-459.67°F)!";
            return;
        }
        f = temp;
        c = (temp - 32) * 5/9;
        k = c + 273.15;
    } else if (unit === "kelvin") {
        if (temp < 0) {
            errorMsg.textContent = "Kelvin temperature cannot be negative!";
            return;
        }
        k = temp;
        c = temp - 273.15;
        f = (c * 9/5) + 32;
    }

    // Display results rounded to 2 decimal places
    document.getElementById("resCelsius").textContent = `Celsius: ${c.toFixed(2)} °C`;
    document.getElementById("resFahrenheit").textContent = `Fahrenheit: ${f.toFixed(2)} °F`;
    document.getElementById("resKelvin").textContent = `Kelvin: ${k.toFixed(2)} K`;

    resultContainer.classList.remove("hidden");
}