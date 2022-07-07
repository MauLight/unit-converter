

let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

convertBtn.addEventListener("click", function () {
    let baseValue = inputEl.value;
    let feetValue = baseValue * meterToFeet;
    let meterValue = baseValue / meterToFeet;
    let gallonValue = baseValue / literToGallon;
    let literValue = baseValue * literToGallon;
    let poundValue = baseValue * kiloToPound;
    let kiloValue = baseValue / kiloToPound;

    lengthEl.textContent = `${baseValue} meters = ${feetValue.toFixed(3)} feet | ${baseValue}  feet = ${meterValue.toFixed(3)} meters`
    volumeEl.textContent = `${baseValue} liters = ${gallonValue.toFixed(3)} gallons | ${baseValue}  gallons = ${literValue.toFixed(3)} liters`
    massEl.textContent = `${baseValue} kilos = ${poundValue.toFixed(3)} pounds | ${baseValue}  pounds = ${kiloValue.toFixed(3)} kilos`

})

/*
const totalPrice = 420.69235632455
const btn = document.getElementById("purchase-btn")
btn.textContent = `Buy €${totalPrice.toFixed(2)}` */
