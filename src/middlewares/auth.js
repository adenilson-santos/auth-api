const jwt = require('jsonwebtoken');





module.exports = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1]
        let decode = jwt.verify(token, process.env.SECRET_KEY)

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Falha na verificação' })
    }


}

// exports.optional = (req, res, next) => {
//     try {
//         let token = req.headers.authorization.split(' ')[1]
//         let decode = jwt.verify(token, process.env.SECRET_KEY || 'secret')
//         req.id = decode

//         next()
//     } catch (error) {
//         next()
//     }


// }
