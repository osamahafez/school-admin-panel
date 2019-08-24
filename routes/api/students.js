const express = require('express')
const router = express.Router()
const Student = require('../../models/Student');
const validateStudentInputs = require('../../validation/students');
const passport = require('passport');
// const IsEmpty = require('../../validation/IsEmpty');

/*
@req: post
@route: /api/students/create
@description: create a new student
@access: private
*/
router.post('/create', passport.authenticate('jwt', {session: false}), (req, res) => {

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
        .then(() => res.status(201).json(student))
        .catch(err => res.status(400).json(err));
        
});

/*
@req: get
@route: /api/students/:student_id
@description: find student by id
@access: private
*/
router.get('/:student_id', passport.authenticate('jwt', {session:false}), (req, res) => {
    Student.findById(req.params.student_id)
        .then(result => res.status(200).json(result))
        .catch(() => res.status(404).json({notFound: 'Student doesn\'t exist'}));
});


/*
@req: delete
@route: /api/students/:student_id
@description: delete student by id
@access: private
*/
router.delete('/:student_id', passport.authenticate('jwt', {session: false}), (req, res) => {
    Student.findByIdAndDelete(req.params.student_id)
        .then(() => res.status(200).json({msg: 'Student deleted successfully'}))
        .catch(err => res.status(400).json(err));
});


module.exports = router