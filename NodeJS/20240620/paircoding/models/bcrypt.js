const bcrypt = require("bcrypt");

exports.createHash = (pw) => {
    return new Promise((res, rej) => {
        bcrypt.hash(pw, 10, (err, data) => {
            if (err) 
                return rej(err);
            res(data);
        })
    })
}

exports.compare = (pw, hash) => {
    return new Promise((res, rej) => {
        bcrypt.compare(pw, hash, (err, same) => {
            if (err) 
                rej(err);
            res(same);
        })
    })
}