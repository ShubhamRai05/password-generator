const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numberSet ="1234567890"
const symbolSet = "!@#$%^&*()-+*/"

// adding selectors

const getRandomData = (dataSet)=>{
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = (password="")=>{
    password = getRandomData(upperCase) + getRandomData(lowerCase) +getRandomData(numberSet) + getRandomData(symbolSet)
    return password
}
 
generatePassword()