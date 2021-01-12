import express from 'express';

const app = express();




app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const register = require('./routers/registerUsers');
const login = require('./routers/loginUsers');
const update = require('./routers/updateUsers');
const delet = require('./routers/deleteUsers');




app.use('/register', register)
app.use('/login', login)
app.use('/update', update)
app.use('/delete', delet)






module.exports = app;