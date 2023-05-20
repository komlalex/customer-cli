
import dotenv from "dotenv";
dotenv.config()
import "colors";
import connectDB from "./config/db.js";

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
        process.exit(1);
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
        process.exit(1);
    }
}
  
// Update Customer 
const updateCustomer =  async (_id, customer) => {
    try {
        await Customer.findByIdAndUpdate(_id, customer);
        console.info(`Customer Update Successfull!!!`.green);
        process.exit(0);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
  }

  // Remove Customer
  const removeCustomer = async (_id) => {
    try {
        await Customer.findByIdAndDelete(_id);
        console.info(`Customer Successfully Removed`.green);
        process.exit(0);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
  }

  // List all Customers
  const listCustomers = async() => {
    try {
        const customers = await Customer.find();
        console.info(customers);
        console.info(`Total Number of Customers: ${customers.length}`)
        process.exit(0)
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
  }
// Exports All Methods

export {
    addCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listCustomers
}