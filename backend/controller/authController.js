// const { json } = require("express")

const signup = (res, req, next)=>{
    const {name, email, password, confirmPasswprd} = req.body;

   return res.status(200),json({
    success: true, 
    data: {}
   })
}

module.exports = {
    signup
}