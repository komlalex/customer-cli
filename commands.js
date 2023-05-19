import {program} from "commander"
import {prompt} from "inquirer";
import {addCustomer, findCustomer} from "./index.js";

//Customer Questions
const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Customer First Name"
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer Last Name"
    },
    {
        type: "input",
        name: "phone",
        message: "Customer Phone"
    },
    {
        type: "input", 
        name: "email",
        message: "Customer Email Address"
    }
]
   
program
.version('1.0.0')
.description('Client Management System');


//Add Customer
/*
program
.command(`add <firstname> <lastname> <phone> <email>`)
.alias('a')
.description('Add a customer')
.action((firstname, lastname, phone , email) => {
    addCustomer({firstname, lastname, phone, email})
});
*/

program
.command("add")
.alias("a")
.description("Add Customer")
.action(() => {
    inquirer.prompt(questions).then((answers) => {
        addCustomer(answers)
    });
})

program
.command(`find <name>`)
.alias('f')
.description('Find a customer')
.action((name) => {
    findCustomer(name)
})

program.parse(process.argv)
