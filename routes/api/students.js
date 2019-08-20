const express = require('express')
const router = express.Router()

const Student = require('../../models/Student');
const validateStudentInputs = require('../../validation/students');

/*
@route: /api/students/create
@description: create a new student
@access: private
*/
router.post('/create', (req, res) => {

    const { errors, errorsFound } = validateStudentInputs(req.body);

    if(errorsFound) {
        return res.status(400).json(errors);
    }
    
    const studentData = {};
    studentData.full_name = req.body.full_name;
    studentData.birth_date = req.body.birth_date;
    studentData.location = req.body.location;
    studentData.stage = req.body.stage;
    studentData.level = req.body.level;
    studentData.parent_info = req.body.parent_info;
    
    const student = new Student(studentData);
    student.save()
        .then(() => res.status(200).json(student))
        .catch(err => res.status(400).json(err));
        
});


module.exports = router