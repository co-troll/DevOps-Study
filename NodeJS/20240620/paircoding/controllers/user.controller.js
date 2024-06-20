const { user, bcrypt } = require("../models");
const jwt = require("jsonwebtoken");

exports.signup = async (id, pw, name) => {
    try {
        const info = await user.userInfo(id);
        if (info) 
            return console.log("존재하는 아이디");
        const hash = await bcrypt.createHash(pw);
        return await user.signup(id, hash, name);
    } catch (error) {
        console.log(error);
        console.log("signup controller error");
    }
}

exports.login = async (id, pw) => {
    try {
        const KEY = "abc123";
        const { id: idCheck, pw: hash, name } = await user.userInfo(id);
        if (!idCheck) 
            return console.log("존재하지 않는 아이디");
        const pwCheck = await bcrypt.compare(pw, hash);
        if (!pwCheck) 
            return console.log("비밀번호가 틀립니다.")
        
        return jwt.sign({
            type: "JWT",
            name: id
        }, KEY, {
            expiresIn: "5m",
            issuer: "server"
        })


    } catch (error) {
        console.log("login controller error");
    }
}

exports.userInfo = async (id) => {
    try {
        return await user.userInfo(id);
    } catch (error) {
        console.log("userInfo controller error");
    }
}