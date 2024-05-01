// calculator.ts
import calculate from "./operators.js";
import PromptSync from "prompt-sync";
import chalk from "chalk";
function calculator() {
    let prompt = PromptSync();
    let num1 = parseFloat(prompt(chalk.bold.cyanBright("↪  Enter the first number: ")));
    let num2 = parseFloat(prompt(chalk.bold.cyanBright("↪  Enter the second number: ")));
    let operator = prompt(chalk.bold.magentaBright("↪  Enter the operator (+, -, *, /): "));
    //The function "isNaN" is true when the value is not a number..
    if (isNaN(num1) || isNaN(num2)) {
        console.log(chalk.red("❗ Please enter the valid information.")); //it will print when the information is wrong..
        return; //it will not execute the result and stops right here..
    }
    let result = calculate(operator, num1, num2);
    console.log(chalk.yellowBright(`➤  Result: ${num1} ${operator} ${num2} = ${result}`));
}
calculator(); //We are calling the function here..
