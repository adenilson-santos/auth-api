const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')


const users = require('../models/users');
const token = require('./loginUsers');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);


router.post('/', async (req, res, next) => {
    const userRegister = new users({
        ...req.body,
        password: await bcrypt.hash(req.body.password, salt)
    });

    await userRegister.save().then(x => {
        
        res.status(200).json({ data: x })

    }).catch(e => {

        res.status(400).json({ error: e })

    });
});

module.exports = router;
