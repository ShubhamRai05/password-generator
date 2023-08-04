const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "!@#$%^&*()-+*/"

// adding selectors
const passwordBox = document.querySelector("#pass-box")
const totalChar = document.querySelector("#total-char")
const upperInput = document.querySelector("#upper-case")
const lowerInput = document.querySelector("#lower-case")
const numberInput = document.querySelector("#numbers")
const symbolInput = document.querySelector("#symbols")
const generateBtn = document.querySelector("#btn")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperCase) + getRandomData(upperCase)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerCase)+getRandomData(lowerCase)
    }
    if (numberInput.checked) {
        password += getRandomData(numberSet) + getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet) +  getRandomData(symbolSet) 
    }
    // console.log( password);
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    console.log(password , password.length);
}

generateBtn.addEventListener("click", () => {
    generatePassword()
})
// generatePassword()










