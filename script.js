
let billAmount = document.getElementById('bill')
let people = document.getElementById('people')
let tipNums = document.getElementsByName("tip")
let custom = document.getElementById('custom')
let errorMsg = document.getElementById('peopleError')
let resetBtn = document.getElementById("reset")

billAmount.addEventListener('input', getBill)
billAmount.addEventListener('input', errorMessage)
people.addEventListener('input', numPeo)
custom.addEventListener('input', customTip)
custom.addEventListener('input', customBillTip)
resetBtn.addEventListener('click', buttonReset)

function getBill() {
    return billAmount.value
    console.log(billAmount.value)
}

function numPeo(){
    console.log(people.value)
    return people.value
}

function customTip(){
    let customTip = document.getElementById('custom').value;
    customTip = customTip/100
    console.log(customTip)
}

function customBillTip(){
    let customTip = document.getElementById('custom').value;
    customTip = customTip/100
    console.log(customTip)

    let final = getBill()
    let finalPeople = numPeo()

    let tipAmount = (final * customTip / finalPeople)
    console.log(tipAmount)

    let totalPerson = ((final/finalPeople) + tipAmount);
    console.log(totalPerson)

    document.querySelector('#one').innerText = tipAmount.toFixed(2)
    document.querySelector('#two').innerText = totalPerson.toFixed(2)
}

function getTip(percentage){
    let final = getBill()
    let finalPeople = numPeo()

    let tipAmount = (final * percentage / finalPeople)
    console.log(tipAmount)

    let totalPerson = ((final/finalPeople) + tipAmount);
    console.log(totalPerson)

    document.querySelector('#one').innerText = tipAmount.toFixed(2)
    document.querySelector('#two').innerText = totalPerson.toFixed(2)
}

function errorMessage() {
    if (billAmount.value > 0 && people.value === ''){
        document.querySelector('#peopleError').style.visibility = 'visible'
        }
}

errorMessage()

function buttonReset() {
    location.reload();
}