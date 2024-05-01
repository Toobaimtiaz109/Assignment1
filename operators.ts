// operators.ts

import chalk from "chalk";

export default function calculate(operator: string, num1: number, num2: number): number {
    let result = 0 ;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        console.log(chalk.red("❗ Invalid operator."));  //If the operator is invalid than it will be executed..
    }
    return result;
}
