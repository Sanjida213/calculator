import './style.scss'

const numberButtons = document.querySelectorAll<HTMLButtonElement>(".number");
const displayNumbers = document.querySelector<HTMLInputElement>(".display_numbers");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(".operator-function")
const clearDisplay = document.querySelector<HTMLButtonElement>("#clearDisplay")
const equalsButton = document.querySelector<HTMLButtonElement>("#equals")


let previousNumber: string | null = "";
let currentNumber: string | null = "";
let currentOperator = "";



if (!numberButtons || !operatorButtons || !clearDisplay || !equalsButton) {
  throw new Error ("Issue with buttons")
}

if (displayNumbers === null) {
  throw new Error ("Issue with display input")
}

const functioningOperators = (previousNumber: number, currentNumber: number, operator: string): number => {
  if (operator === '+') {
    return previousNumber + currentNumber
  } else if (operator === `-`) {
    return previousNumber - currentNumber 
  } else if (operator === `*`) {
    return previousNumber * currentNumber 
  } else if (operator === `/`) {
    return previousNumber / currentNumber
  } else {
    throw new Error ("Invalid operator")
  }
}






const handleClickAllButtons = (event: Event) => {
  displayNumbers.value = ""
  const operator = event.currentTarget as HTMLButtonElement;
  const userInput = operator.textContent
  console.log(userInput)
}

operatorButtons.forEach(operator => {
  operator.addEventListener("click", handleClickAllButtons)
});
// need to store this button, then need to store a second number and then 
// figure out how i can do so wihtout the second number overriding the first


const handleClickNumber = (event: Event) => {
    const button = event.currentTarget as HTMLButtonElement;
    previousNumber = button.textContent
    displayNumbers.value += previousNumber
    
    currentNumber = button.textContent
    
    const userInputTwo = displayNumbers.value
    console.log(userInputTwo) 

};


numberButtons.forEach(button => {
  button.addEventListener("click", handleClickNumber)
});



// console.log(previousNumber)
// console.log(currentNumber)

// const clearDisplayButton = (event: Event) => {
  // const clearButton = event.currentTarget as HTMLButtonElement;
  
  // const userInput = clearButton.textContent
  // console.log(userInput)
//   const userInput = displayNumbers.value += " "
//   console.log(userInput)
// }

// clearDisplay.addEventListener("click", clearDisplayButton)




const clearDisplayButton = () => {
  displayNumbers.value = ""; 
};

clearDisplay.addEventListener("click", clearDisplayButton);



// const number1 = document.querySelector<HTMLButtonElement>(".number-1")
// const number2 = document.querySelector<HTMLButtonElement>(".number-2")
// const number3 = document.querySelector<HTMLButtonElement>(".number-3")
// const number4 = document.querySelector<HTMLButtonElement>(".number-4")
// const number5 = document.querySelector<HTMLButtonElement>(".number-5")

// const numberArray = [number1, number2, number3, number4, number5];

// numberArray.forEach => {
//   numbers.addEventListener("click", handleClickNumber)
//   if (!numbers) {
//     throw new Error ("Isses")
//   }
// }

// const handleEqualsButton = () => {
//   if (previousNumber !== null && currentNumber !== null && currentOperator !== "") {
//     const result = functioningOperators(parseFloat(previousNumber), parseFloat(currentNumber), currentOperator);
//     displayNumbers.value = result.toString();
//     previousNumber = result.toString();
//     currentNumber = null;
//     currentOperator = "";
//   }
  
// }

// equalsButton.addEventListener("click", handleEqualsButton);
