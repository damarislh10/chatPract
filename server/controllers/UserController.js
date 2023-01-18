const User = require("../model/UserModel");
const brcypt = require("bcrypt");

module.exports.register = async(req, res, next) => {
    try {
        const { username, email, password} = req.body;
        const usernameCheck = await User.findOne({username});
        if(usernameCheck)
        return res.json({msg: "Username already used", status: false});
           const emailCheck = await User.findOne({email});
        if(emailCheck) return res.json({msg: "Correo ya usado", status: false});
        const hashedPassword = await brcypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        delete user.password;
        return res.json({status: true, user})
    } catch(ex) {
        next(ex)
    }
};