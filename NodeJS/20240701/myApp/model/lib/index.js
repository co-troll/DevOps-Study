const config = require("./config");
const Sequelize = require("sequelize");

const _sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = _sequelize;

const entitys = ["../user.entity"];

entitys.forEach((path) => {
    const model = require(path);
    model.init(_sequelize);
    db[model.name] = model;
})

console.log(db);
module.exports = db;