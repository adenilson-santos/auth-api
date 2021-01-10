const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')
const Users = require('../models/users')


router.delete('/', auth, async (req, res, next) => {

    await Users.findByIdAndDelete(req.id.user_id)
    res.status(200).json({ message: 'ususario removido'})
});




module.exports = router;