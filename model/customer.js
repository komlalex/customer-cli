import mongoose from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstname: {
        type: String,
        require: [true, "First name is required"]
    },
    lastname: {
        type: String,
        require: [true, "Last name is required"]
    },
    phone: {
        type: String,
        require: [true, "Phone is required"]
    },
    email: {
        type: String,
        require: [true, "Email is required"]
    }
}, {
    timestamps: true
});


export default mongoose.model("Customer", customerSchema);