const express = require('express')
const router = express.Router()

/*
@route: /api/admins/login
@description: create a new student
@access: public
*/
router.post('/login', (req, res) => {

    
    res.status(200).json('You logged in successfully');
});


module.exports = router