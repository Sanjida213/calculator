import './style.scss'

const buttons = document.querySelectorAll<HTMLButtonElement>("button");
const displayNumbers = document.querySelector<HTMLInputElement>(".display_numbers");


if (!buttons) {
  throw new Error ("Issue with buttons")
}

if (displayNumbers === null) {
  throw new Error ("issue")
}

const handleClickNumber = (event: Event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const userInput = button.textContent
    console.log(userInput)
    displayNumbers.value += userInput
    // if (displayNumbers === null) {
    //   throw new Error ("display error")
    // }
  }; 


buttons.forEach(button => {
  button.addEventListener("click", handleClickNumber)
});










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