const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required:true
    },
    userid: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

})

module.exports = Contact = mongoose.model('Contacts',ContactSchema);