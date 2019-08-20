const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    national_id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
