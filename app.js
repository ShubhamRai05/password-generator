// Values 
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

// it will create a random set of data 
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

// it will generate the passwords
const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperCase) 
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerCase)
    } 
    if (numberInput.checked) {
        password += getRandomData(numberSet) 
    }
    if (symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value){
        return generatePassword(password)
    }
    passwordBox.innerText =  truncateString(password , totalChar.value) 
    // it is working like a recursive function
}


generateBtn.addEventListener("click", () => {
    generatePassword()
})


// this function is triming the extra password values and making it as per user requirment
const truncateString = (str , num)=>{
if(str.length > num){
    let substr = str.substring(0,num)
    return substr
}
else
{
    return str
}
}







