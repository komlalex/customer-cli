#!/usr/bin/env node
import {program} from "commander"
import inquirer from "inquirer";
import {addCustomer, findCustomer, updateCustomer, removeCustomer, listCustomers} from "./index.js";

//Customer Questions
const questions = [
    {
        type: "input",
        name: "firstname",
        message: "Customer First Name",
        validate: (firstname) => {
            if (!firstname.length) {
                return `Please provide a first name`;
            }
            return true;
        },
        filter: (firstname) => {
            return firstname.trim();
        }
    },
    {
        type: "input",
        name: "lastname",
        message: "Customer Last Name",
        validate: (lastname) => {
            if (!lastname.length) {
                return `Please provide a last name`;
            }
            return true;
        },
        filter: (lastname) => {
            return lastname.trim();
        }
    },
    {
        type: "input",
        name: "phone",
        message: "Customer Phone",
        validate: (phone) => {
            if (!phone.length) {
                return `Please provide a phone`;
            }
            return true;
        },
        filter: (phone) => {
            return phone.trim();
        }
    },
    {
        type: "input", 
        name: "email",
        message: "Customer Email Address",
        validate: (email) => {
            if (!email.length) {
                return `Please provide an email`;
            }
            return true;
        },
        filter: (email) => {
            return email.trim();
        }
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


// Find Customer
program
.command(`find <name>`)
.alias('f')
.description('Find a customer')
.action((name) => {
    findCustomer(name)
})

// Update Customer
program
.command(`update <_id>`)
.alias(`u`)
.description(`Update Customer`)
.action((_id) => {
    inquirer.prompt(questions).then((answers) => {
        updateCustomer(_id, answers)
    })
});

// Remove Customer 
program
.command(`remove <_id>`)
.alias(`r`)
.description(`Remove Customer`)
.action((_id) => {
    removeCustomer(_id);
});

// List All Customers
program
.command(`list`)
.alias(`l`)
.description(`List All Customers`)
.action(() => listCustomers());





program.parse(process.argv)
