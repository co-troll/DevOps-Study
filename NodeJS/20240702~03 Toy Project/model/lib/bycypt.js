const bcrypt = require("bcrypt");

exports.createHash = (pw) => {
    return new Promise((res, rej) => {
        bcrypt.hash(pw, 10, (err, hash) => {
            if (err) 
                rej("해싱 실패");
            res(hash);
        })
    })
}

exports.compare = (pw, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(pw, hash, (err, same) => {
            if (err)
                rej("비교 실패");
            res(same);
        })
    })
}