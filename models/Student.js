const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    full_name: {
        type: String,
        required: true
    },
    
    birthday: {
        type: Date
    },
    
    location: {
        type: String
    },
    
    stage: {
        type: String,
        required: true
    },
    
    level: {
        type: String,
        required: true
    },

    parent_info: {
        full_name: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        national_id: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    },

    reg_date: {
        type: Date,
        default: Date.now
    }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
