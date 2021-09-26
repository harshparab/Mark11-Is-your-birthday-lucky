const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box")

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber == 0) {
        outputBox.innerHTML = "Your birthday is lucky"
    } else {
        outputBox.innerHTML = "Your birthday is not lucky"
    }
}


function checkBirthdateIsLucky() {
    const luckyNo = Number(luckyNumber.value)
    const dob = dateOfBirth.value
    const sum = calculateSum(dob)
     if (sum && dob && Number(luckyNumber.value)>0) {
        compareValues(sum, luckyNumber.value)
    } else {
        outputBox.innerHTML = "Please enter both the fields and enter a positive lucky number"
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "")
    let sum = 0;
    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum
}

checkNumberButton.addEventListener('click', checkBirthdateIsLucky)