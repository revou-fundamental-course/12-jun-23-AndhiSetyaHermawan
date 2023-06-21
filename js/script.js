// Element DOM
const temperatureInput = document.getElementById("temperature");
const convertBtn = document.getElementById("convertBtn");
const resetBtn = document.getElementById("resetBtn");
const reverseBtn = document.getElementById("reverseBtn");
const resultContainer = document.getElementById("result");
const calculationContainer = document.getElementById("calculation");
const reverseLink = document.getElementById("reverseLink");
const unitCelsius = document.querySelectorAll(".unit");

// Konversi Celsius ke Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Konversi Fahrenheit ke Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Validasi Input
function validateInput(input) {
  if (isNaN(input)) {
    alert("Input harus berupa angka!");
    return false;
  }
  return true;
}

// Handler tombol Konversi
function convertHandler() {
  const temperature = parseFloat(temperatureInput.value);

  if (validateInput(temperature)) {
    const fahrenheit = celsiusToFahrenheit(temperature);
    const calculation = `(${temperature} °C) * (9/5) + 32 = ${fahrenheit.toFixed(2)} °F`;

    resultContainer.textContent = `${fahrenheit.toFixed(2)} °F`;
    calculationContainer.textContent = calculation;
  }
}

// Handler tombol Reset
function resetHandler() {
  temperatureInput.value = "";
  resultContainer.textContent = "";
  calculationContainer.textContent = "";
}

// Handler tombol Reserve
function reverseHandler() {
  const temperature = parseFloat(temperatureInput.value);

  if (validateInput(temperature)) {
    const celsius = fahrenheitToCelsius(temperature);
    const calculation = `(${temperature} °F - 32) * (5/9) = ${celsius.toFixed(2)} °C`;

    resultContainer.textContent = `${celsius.toFixed(2)} °C`;
    calculationContainer.textContent = calculation;
    unitCelsius.forEach(unit => {
      unit.textContent = "Celsius (°C)";
    });
    reverseLink.textContent = "Celsius (°C) ke Fahrenheit (°F)";
  }
}

// Event Listener
convertBtn.addEventListener("click", convertHandler);
resetBtn.addEventListener("click", resetHandler);
reverseBtn.addEventListener("click", reverseHandler);

// Event Listener untuk link Reverse
reverseLink.addEventListener("click", function (e) {
  e.preventDefault();
  reverseHandler();
});