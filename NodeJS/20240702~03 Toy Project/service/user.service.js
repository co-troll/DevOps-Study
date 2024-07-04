const UserRepository = require("../repository/user.repository");
const bcrypt = require("../model/lib/bycypt");
const fs = require("fs");
const path = require("path");

class UserService {
    /** @param {UserRepository} userRepository  */
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    async login(id, pw) {
        try {
            const user = await this.userRepository.findUserById(id);
            if (user.id !== id) 
                return ["", "아이디가 틀립니다."];
            const compare = await bcrypt.compare(pw, user.pw);
            if (!compare) 
                return ["", "비밀번호가 틀립니다."];
            return [user.name, "로그인 성공"];
        } catch (error) {
            console.log(error);
        }
    }

    async signUp(id, pw, name) {
        try {
            const check = await this.userRepository.findUserById(id);
            if (check) 
                return [false, "중복된 아이디입니다."];
            const hash = await bcrypt.createHash(pw);
            await this.userRepository.createUser(id, hash, name);
            return [true, "회원가입 성공"];
        } catch (error) {
            console.log(error);
        }
    }

    async getUserById(id) {
        try {
            return await this.userRepository.findUserById(id); 
        } catch (error) {
            console.log(error);
        }
    }

    async modifyUser(id, pw, name, img) {
        try {
            let changeImg = img;
            const user = await this.userRepository.findUserById(id);
            if (img)
                fs.unlinkSync(path.join(__dirname, "../public/uploads", user.img));
            else 
                changeImg = user.img;
            const compare = await bcrypt.compare(pw, user.pw);
            if (!compare) 
                return ["", "비밀번호가 틀립니다."];
            await this.userRepository.updateUser(id, name, changeImg);
            return ["성공", "회원 수정 완료"];
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UserService;