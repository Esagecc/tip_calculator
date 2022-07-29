
let billAmount = document.getElementById('bill')
let people = document.getElementById('people')
let tipNums = document.getElementsByName("tip")
let custom = document.getElementById('custom')
let errorMsg = document.getElementById('peopleError')
let resetBtn = document.getElementById("reset")

billAmount.addEventListener('input', getBill)
people.addEventListener('input', numPeo)
custom.addEventListener('input', customTip)

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
    console.log(custom)
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

    if (people === '' && billAmount > 0){
        document.querySelector('.error').style.display = 'block';
        }
}