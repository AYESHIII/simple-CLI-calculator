#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
 console.log(chalk.blueBright.bold("\n\t WELCOME TO  SHEIKH'S CALCULATOR \n\t"));
// asking question from users through inquirer
let answers = await inquirer.prompt([
{ message :"enter firstNumber",type: "number", name: "firstNumber"},
{ message : "enter secondNumber",type: "number", name: "secondNumber"},
{
    message:  "select one operator to perform operation",
    type: "list",
    name:"operator",
    choices: ["Addition", "Subtraction", "Multiplication","Division"],
},

]);
// conditional statement IF ELSE
if(answers.operator === "Addition") {
    console.log(chalk.green.bold (answers.firstNumber + answers.secondNumber))
}
else if(answers.operator === "Subtraction") {
    console.log(chalk.green.bold (answers.firstNumber - answers.secondNumber))
}
else if(answers.operator === "Multiplication") {
    console.log(chalk.green.bold (answers.firstNumber * answers.secondNumber))
}
else if(answers.operator === "Division") {
    console.log(chalk.green.bold (answers.firstNumber / answers.secondNumber))
}
else {
    console.log(chalk.redBright.bold("invalid output"))
}