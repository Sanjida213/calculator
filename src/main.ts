import './style.scss'

const numberButtons = document.querySelectorAll<HTMLButtonElement>(".number");
const displayNumbers = document.querySelector<HTMLInputElement>(".display_numbers");
const operatorButtons = document.querySelectorAll<HTMLButtonElement>(".operator-function")
const clearDisplay = document.querySelector<HTMLButtonElement>("#clearDisplay")
const equalsButton = document.querySelector<HTMLButtonElement>("#equals")
const plusMinus = document.querySelector<HTMLButtonElement>("#plusMinus")
const percentBtn = document.querySelector<HTMLButtonElement>("#percentSign")


let previousNumber: string = "";
let currentNumber: string = "";
let currentOperator: string = "";

if (!numberButtons || 
  !operatorButtons || 
  !clearDisplay || 
  !equalsButton || 
  !plusMinus || 
  !percentBtn) {
  throw new Error ("Issue with buttons")
}

if (displayNumbers === null) {
  throw new Error ("Issue with display input")
}

let result = 0
const calculate = (): void => {
  let num1 = parseFloat(previousNumber);
  let num2 = parseFloat(currentNumber);


  if (currentOperator === '+') {
    result = num1 + num2;
  } else if (currentOperator === `-`) {
    result = num1 - num2;
  } else if (currentOperator === `x`) {
    result = num1 * num2;
  } else if (currentOperator === `/`) {
    result = num1 / num2; 
  } else {
    throw new Error ("Invalid operator")
  }

  displayNumbers.value += result.toString();
};


const handleClickNumber = (event: Event) => {
  const button = event.currentTarget as HTMLButtonElement;
  const number = button.textContent as string;

    if (currentOperator) {
      currentNumber += number;
    } else {
      previousNumber += number;
    }

  displayNumbers.value += number;
};

const handleClickAllButtons = (event: Event) => {
  const operatorButton = event.currentTarget as HTMLButtonElement;
  const operator = operatorButton.textContent as string;

    displayNumbers.value += ` ${operator} `;
    currentOperator = operator;
}


const clearDisplayButton = () => {
  displayNumbers.value = ""; 
  previousNumber = "";
  currentNumber = "";
  currentOperator = "";
};


const handleEquals = () => {
  displayNumbers.value = ""
  calculate();
  previousNumber = result.toString();
  currentNumber = "";
  currentOperator = "";
};



const plusMinusButton = () => {
  displayNumbers.innerText = ""
  if(previousNumber) {
    result = - Number(previousNumber)
    previousNumber = result.toString()
    displayNumbers.value = result.toString()
  }
};


const handlePercentButton = () => { 
  displayNumbers.innerHTML = ""
  if(previousNumber) {
    result = parseFloat(previousNumber) / 100
    previousNumber = result.toString()
    displayNumbers.value = result.toString()
  }
};



clearDisplay.addEventListener("click", clearDisplayButton);
equalsButton.addEventListener("click", handleEquals);
percentBtn.addEventListener("click", handlePercentButton)
plusMinus.addEventListener("click", plusMinusButton);
numberButtons.forEach(button => {
  button.addEventListener("click", handleClickNumber)
});
operatorButtons.forEach(operator => {
  operator.addEventListener("click", handleClickAllButtons)
});