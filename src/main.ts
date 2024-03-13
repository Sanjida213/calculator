import './style.scss'

const numberButtons = document.querySelectorAll<HTMLButtonElement>(".number");
const displayNumbers = document.querySelector<HTMLInputElement>(".display_numbers");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(".operator-function")
const clearDisplay = document.querySelector<HTMLButtonElement>("#clearDisplay")
const equalsButton = document.querySelector<HTMLButtonElement>("#equals")
const plusMinus = document.querySelector<HTMLButtonElement>("#plusMinus")
const percentButton = document.querySelector<HTMLButtonElement>("#percentSign")

let previousNumber: string | null = "";
let currentNumber: string | null = "";
let currentOperator: string | null = "";

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
  } else if (currentOperator === `x`) {
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



const handleClickAllButtons = (event: Event) => {
  displayNumbers.value = ""
  const operator = event.currentTarget as HTMLButtonElement;
  currentOperator = operator.textContent
}

operatorButtons.forEach(operator => {
  operator.addEventListener("click", handleClickAllButtons)
});



plusMinus.addEventListener("click", () => {
  displayNumbers.innerHTML = "";
  if(previousNumber != "") {
    result = - Number(previousNumber)
    previousNumber = result.toString()
  }

  displayNumbers.value = result.toString()
});


percentButton.addEventListener("click", () => {
  if(previousNumber != "") {
    result = Number(previousNumber) / 100
    previousNumber = result.toString()
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

