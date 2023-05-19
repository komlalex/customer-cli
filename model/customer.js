const mongoose = require('mongoose');
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


module.exports = mongoose.model("Customer", customerSchema);