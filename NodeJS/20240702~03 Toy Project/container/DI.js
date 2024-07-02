const container = require("./");
const UserModel = require("../model/user.model");
const UserRepository = require("../repository/user.repository");
const UserService = require("../service/user.service");
const UserController = require("../controller/user.controller");
const BoardModel = require("../model/board.model");
const BoardRepository = require("../repository/board.repository");
const BoardService = require("../service/board.service");
const BoardController = require("../controller/board.controller");

// 데이터베이스 모델
// 레파지토리
// 서비스
// 컨트롤러

// User
container.register("UserModel", UserModel, []);
container.register("UserRepository", UserRepository, ["UserModel"]);
container.register("UserService", UserService, ["UserRepository"]);
container.register("UserController", UserController, ["UserService"]);

// Board
container.register("BoardModel", BoardModel, []);
container.register("BoardRepository", BoardRepository, ["BoardModel"]);
container.register("BoardService", BoardService, ["BoardRepository"]);
container.register("BoardController", BoardController, ["BoardService"]);

module.exports = container;