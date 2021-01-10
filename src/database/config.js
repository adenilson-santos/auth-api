const mongoose = require('mongoose');



mongoose.connect(process.env.MONGODB_CONFIG,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


module.exports = mongoose;