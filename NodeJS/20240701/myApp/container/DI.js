const container = require("./");
const UserModel = require("../model/user.model");
const UserRepository = require("../repository/user.repository");
const UserService = require("../service/user.service");
const UserController = require("../controller/user.controller");

// 데이터베이스 모델
// 레파지토리
// 서비스
// 컨트롤러
// 왜? nestjs 사전지식

// 데이터베이스 모델
container.register("UserModel", UserModel, []);
// 레파지토리
container.register("UserRepository", UserRepository, ["UserModel"]);
// 서비스
container.register("UserService", UserService, ["UserRepository"]);
// 컨트롤러
container.register("UserController", UserController, ["UserService"]);


module.exports = container;