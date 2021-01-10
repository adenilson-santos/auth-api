const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')
const Users = require('../models/users')


router.delete('/', auth, async (req, res, next) => {
    try {
        let deleted = await Users.findByIdAndDelete(req.id.user_id)

        if (deleted === null) { throw new Error('User not deleted') }

        res.status(200).json({ message: 'User deleted'})

    } catch (error) {
        res.status(400).json({ error: error })
    }
});




module.exports = router;