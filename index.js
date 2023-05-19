
import dotenv from "dotenv";
dotenv.config()
import "colors";
import connectDB from "./config/db.js";

const port = process.env.PORT || 1998
//Connect DB
connectDB();

// Import model
import Customer from "./model/customer.js";

//Add Customer
const addCustomer = async (customer) => {
    try {
        const newCustomer = new Customer(customer);
        await newCustomer.save()
        console.info("New Customer Added");
        console.info(`Success!!!`.green);
        process.exit(0);
    } catch (error) {
        console.error(error.message);
        process.exit(0);
    }
}
        
//Find Customer
const findCustomer = async (name) => {
    // Make case insensitive
    const search = new RegExp(name, "i");
    try {
       const customer = await Customer.find({$or: [{firstname: search}, {lastname: search}]});
        console.info(customer);
        console.info(`${customer.length} matches`);
        console.info(`Success!!!`.green);
        process.exit(0);
    } catch (error) {
        console.error(error.message);
        process.exit(0);
    }
}
  
// Exports All Methods

export {
    addCustomer,
    findCustomer
}