const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const Users = require('../models/users')

const router = express.Router();



router.post('/', async (req, res, next) => {
    try {

        //user authentication
        //autenticação de usuario
        const { username, password } = req.body
        const users = await Users.findOne({ username })

        const isAuthenticated = await bcrypt.compare(password, users.password)

        if (!isAuthenticated) {
            throw new Error('Invalid password')
        };

        //generating token after authenticating
        //gerando token depois de autenticar
        
        const token = jwt.sign({ user_id: users._id }, process.env.SECRET_KEY, { expiresIn: '1h' })


        res.status(200).json({ token: token })

    } catch (error) {

        res.status(400).json({ message: error.message })
    }
});

module.exports = router;