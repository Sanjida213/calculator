import './style.scss'

const numberButtons = document.querySelectorAll<HTMLButtonElement>(".number");
const displayNumbers = document.querySelector<HTMLInputElement>(".display_numbers");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(".operator-function")
const clearDisplay = document.querySelector<HTMLButtonElement>("#clearDisplay")
const equalsButton = document.querySelector<HTMLButtonElement>("#equals")
const plusMinus = document.querySelector<HTMLButtonElement>("#plusMinus")
const percentButton = document.querySelector<HTMLButtonElement>("#percentSign")

let previousNumber: string | number = "";
let currentNumber: string | null = "";
let currentOperator: string | null = "";
let newOperator: string | null = "";


if (!numberButtons || 
  !operatorButtons || 
  !clearDisplay || 
  !equalsButton || 
  !plusMinus || 
  !percentButton) {
  throw new Error ("Issue with buttons")
}

if (displayNumbers === null) {
  throw new Error ("Issue with display input")
}

let result = 0
const calculate = (): void => {
  displayNumbers.value = ""
  
  console.log(currentOperator)
  console.log(typeof currentOperator)


  if (currentOperator === '+') {
    result = Number(previousNumber) + Number(currentNumber);
  } else if (currentOperator === `-`) {
    result = Number(previousNumber) - Number(currentNumber);
  } else if (currentOperator === `*`) {
    result = Number(previousNumber) * Number(currentNumber);
  } else if (currentOperator === `/`) {
    result = Number(previousNumber) / Number(currentNumber); 
  } else if (currentOperator === `%`) {
    result = Number(previousNumber) % Number(currentNumber); 
  } else {
    throw new Error ("Invalid operator")
  }

  displayNumbers.value += result;
};

equalsButton.addEventListener("click", calculate);



const handleClickAllButtons = (event: Event) => {
  displayNumbers.value = ""
  const operator = event.currentTarget as HTMLButtonElement;
  currentOperator = operator.textContent
  newOperator = operator.textContent
}

operatorButtons.forEach(operator => {
  operator.addEventListener("click", handleClickAllButtons)
});


const handleClickNumber = (event: Event) => {
  const button = event.currentTarget as HTMLButtonElement;
  const number = button.textContent

  if (currentOperator) {
    currentNumber =  (currentNumber || "") + number;
    displayNumbers.value += number

  }  else {
    previousNumber = (previousNumber || "") + number;
    displayNumbers.value += number
  }
};

numberButtons.forEach(button => {
  button.addEventListener("click", handleClickNumber)
});




plusMinus.addEventListener("click", () => {
  displayNumbers.innerHTML = "";
  if(previousNumber != "") {
    result = -previousNumber
    previousNumber = result
  }
  if (previousNumber != "" && currentNumber != ""  && currentOperator != "") {
    result = -result;
  }

  displayNumbers.value = result.toString()
});


const clearDisplayButton = () => {
  displayNumbers.value = ""; 
  previousNumber = "";
  currentNumber = "";
  currentOperator = "";
};

clearDisplay.addEventListener("click", clearDisplayButton);


// deploy to github



// let resultTwo = result; 


  // if (newOperator === '+') {
  //   resultTwo = Number(result) + Number(currentNumber); 
  // } else if (newOperator === '-') {
  //   resultTwo = Number(result) - Number(currentNumber); 
  // } else if (newOperator === '*') {
  //   resultTwo = Number(result) * Number(currentNumber); 
  // } else if (newOperator === '/') {
  //   resultTwo = Number(result) / Number(currentNumber); 
  // } else if (newOperator === '%') {
  //   resultTwo = Number(result) % Number(currentNumber); 
  // } else {
  //   throw new Error("Invalid operator");
  // }

  // console.log(resultTwo)
  // displayNumbers.value = resultTwo.toString()
