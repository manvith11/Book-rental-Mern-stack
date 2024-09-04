const user = require('../Model/user')
const bcryptjs = require('bcryptjs')

const Login = async(req,res) => {

    const body  = req.body
    const findUser = await user.findOne({ email:body.email })
    // bcrypt used for hashing password
    const comparePassword = await bcryptjs.compare(body.password, findUser.password)
    // comparing hashing password with raw password which user is sending in body.password
    if(!comparePassword) {
        return res.status(401).json({ errorMessage: 'Invalid Password'})
    }
    res.send({message: 'Success', data: findUser })
}

const Register = async(req,res) => {
    //data which we are getting from user in req.body
    const body = req.body
    const hashedpassword = await bcryptjs.hash(req.body.password,10)
    const saveData = await user.create({
        username: body.username,
        email: body.email,
        //saving the hashed password
        password: hashedpassword
    })//saves in mongo database

    res.send({message: 'Success', data: saveData})
    //sending back the user data to react    
}

module.exports = {
    Login,
    Register
}



