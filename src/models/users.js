const mongoose = require('../database/config')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    is_premium: {
        type: Boolean,
        default: false
    },

    created_at: {
        type: Date,
        default: Date.now
    },

    updated_at: Date,

    renew_at: Date
})

const Users = mongoose.model('Users', userSchema);



module.exports = Users;