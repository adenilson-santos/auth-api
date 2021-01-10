const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();




const Users = require('../models/users')
const auth = require('../middlewares/auth')


router.put('/', auth, async (req, res, next) => {
    try {
        console.log(auth)
        let { password, } = req.body
        const users = await Users.findByIdAndUpdate(req.id.user_id, { password: password })

        res.status(200).json({ message: 'Password at' })
    } catch (error) {
        res.status(400).json({ message: 'Erro ao salvar senha' })
    }
});



module.exports = router;