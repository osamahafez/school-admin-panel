const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const Admin = require('../../models/Admin');

/*
@route: /api/admins/login
@description: create a new student
@access: public
*/
router.post('/login', (req, res) => {

    const adminsData = {};
    adminsData.username = req.body.username;
    adminsData.password = req.body.password;

    Admin.findOne({username: adminsData.username})
        .then((result) => {
            if(result === null) { 
                // username not found
                return res.status(404).json({notFound: 'Username doesn\'t exsist'});
            }
            else {
                if(adminsData.password === result.password) {
                    // success
                    const payload = {
                        id: result._id,
                        full_name: result.full_name,
                        national_id: result.national_id,
                        username: result.username,
                        password: result.password
                    }
                    
                    jwt.sign(payload, keys.JWTSecret, {expiresIn: '12h'}, (err, token) => {
                        if(err) {
                            return res.status(400).json(err);
                        }
                        else {
                            return res.status(200).json({token: `Bearer ${token}`});
                        }
                    });

                } else {
                    // password not correct
                    return res.status(400).json({passwordNotCorrect: 'Password is not correct'});
                }
            }
        })
        .catch(err => res.status(400).json(err))
    
});


module.exports = router