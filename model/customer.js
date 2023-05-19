import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }
});


export default mongoose.model("Customer", customerSchema);