const validator = require('validator');
const IsEmpty = require('./IsEmpty');

const validateStudentInputs = (data) => {
    let errors = {};
    let errorsFound;

    data.full_name               = IsEmpty(data.full_name)               ? '' : data.full_name; 
    data.birth_date              = IsEmpty(data.birth_date)              ? '' : data.birth_date; 
    data.parent_info             = IsEmpty(data.parent_info)             ? '' : data.parent_info; 
    data.parent_info.full_name   = IsEmpty(data.parent_info.full_name)   ? '' : data.parent_info.full_name; 
    data.parent_info.phone       = IsEmpty(data.parent_info.phone)       ? '' : data.parent_info.phone; 
    data.parent_info.national_id = IsEmpty(data.parent_info.national_id) ? '' : data.parent_info.national_id; 


    // student full name validation
    if(validator.isEmpty(data.full_name)) {
        errors.full_name = 'Enter Student\'s Full Name';
    }

    // birth date validation
    if(validator.isEmpty(data.birth_date)) {
        errors.birth_date = 'Enter Student\'s Birth Date';
    }

    if(validator.isAfter(data.birth_date, `${new Date().getMonth()}/${new Date().getDate()}/${new Date().getFullYear()}` )) {
        errors.birth_date = 'Birth date is not valid';
    }

    // student stage validation
    if(validator.isEmpty(data.stage)) {
        errors.stage = 'Select Student\'s Stage';
    }

    // student level validation
    if(validator.isEmpty(data.level)) {
        errors.level = 'Select Student\'s Level';
    }

    // parent name validation
    if(validator.isEmpty(data.parent_info.full_name)) {
        errors.parent_info_full_name = 'Enter Parent\'s Full Name';
    }

    // parent number validation
    if(!validator.isLength(data.parent_info.phone, {min:6})) {
        errors.parent_info_phone = 'Phone Number Must Be At Least 6 Digits'
    }
    
    if(validator.isEmpty(data.parent_info.phone)) {
        errors.parent_info_phone = 'Enter Parent\'s Phone Number';
    }

    // parent national id validation
    if(!validator.isLength(data.parent_info.national_id, {min:14, max:14})) {
        errors.parent_info_national_id = 'National ID Must Be Exactly 14 Digits';
    }

    if(validator.isEmpty(data.parent_info.national_id)) {
        errors.parent_info_national_id = 'Enter Parent\'s National ID';
    }

    // parent email validation
    if(data.parent_info.email !== undefined) {
        if(!validator.isEmail(data.parent_info.email)) {
            errors.parent_info_email = 'Email Address Is Not Valid';
        }
    }

    return {
        errors: errors,
        errorsFound: !IsEmpty(errors)
    }

}

module.exports = validateStudentInputs;