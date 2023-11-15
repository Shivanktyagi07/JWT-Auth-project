const express = require('express')
const authRouter = require('./router/authRoute')

const app = express();

app.use('/api/auth', authRouter);

app.use('/', (req, res)=>{
    res.status(200).json({data: 'JWTAuth server--updated again'});
});

module.exports= app;
