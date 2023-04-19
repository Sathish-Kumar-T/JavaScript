
  

// const input2= document.getElementById('input1').value; // replace with user input
// const operands = input2.split(/[+\-*\/]/); // split string at +,-,*,/
// const operator = input2.match(/[+-*/]/); // find operator
// let result;
// let resultdiv=document.createElement('resultdiv')
// resultdiv.id='result'
// document.getElementById('whole').appendChild(resultdiv)

// console.log(input2)
// // switch (operator[0]) {
// //   case '+':
// //     result = parseFloat(operands[0]) + parseFloat(operands[1]);
// //     break;
// //   case '-':
// //     result = parseFloat(operands[0]) - parseFloat(operands[1]);
// //     break;
// //   case '*':
// //     result = parseFloat(operands[0]) * parseFloat(operands[1]);
// //     break;
// //   case '/':
// //     result = parseFloat(operands[0]) / parseFloat(operands[1]);
// //     break;
// //   default:
// //     // console.log("Invalid operator");
// //     break;
// // }

// // console.log(result); // prints 10
// // // document.getElementById('result').innerHTML=result



//gpt code
// Prompt user for input
// const input = prompt("Enter an expression:");
const input= document.getElementById('input1').value;
// Split input string into operands and operator
// const operands = input.split(/[+\-*\/]/);
// const operator = input.match(/[+\-*\/]/);

// Check if input is valid
// if (!operator || operands.length !== 2) {
  console.log(input);
// } else {
  // Convert operands to numbers
//   const num1 = Number(operands[0]);
//   const num2 = Number(operands[1]);

//   // Evaluate expression using switch case
//   let result;
//   switch(operator[0]) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     default:
//       console.log("Invalid operator");
//   }

//   // Display result to user
//   console.log(`Result: ${result}`);
// // }



// Get the user input from a text box
let userInput = document.getElementById("inputBox").value;

// Split the user input into its components
let components = userInput.split(" ");
let operator = components[1];
let firstNumber = parseFloat(components[0]);
let secondNumber = parseFloat(components[2]);

// Check if the input is valid
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  console.log("Invalid input");
} else {
  // Perform the calculation based on the operator
  switch (operator) {
    case "+":
      console.log(firstNumber + secondNumber);
      break;
    case "-":
      console.log(firstNumber - secondNumber);
      break;
    case "*":
      console.log(firstNumber * secondNumber);
      break;
    case "/":
      console.log(firstNumber / secondNumber);
      break;
    default:
      console.log("Invalid operator");
  }
}
