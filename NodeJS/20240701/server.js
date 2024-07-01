// MVC 패턴
// service : 비지니스 로직을 처리하는 곳 repository 데이터를 받아서 컨트롤러에 전달하는 역할
// repository : 데이터 베이스 접근 로직을 서비스에서 분리해서 코드의 책임을 명확히 하는 곳
// 단순하게 http 요청과 응답만 처리할수 있도록 분리 코들의 응집도를 높이는 것 요지보수가 편하다.

// 사용자의 내용만 데이터베이스에서 respository, services

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    getUserIndex(id) {
        return this.userRepository.findUserIndex(parseInt(id));
    }
}

class UserRepository {
    constructor (db) {
        this.db = db; // db 객체를 생성자에서 받고
    }

    findUserIndex(id) {
        // 데이터베이스의 값을 초조히
        return this.db.findOne((user) => user.id === id);
    }
}

const dataBase = {
    users: [
        { id: 1, name: "soon" },
        { id: 2, name: "soon2" },
    ],
    findOne(fn) {
        return this.users.find(fn);
    }
}

const express = require("express");

const app = express();

// 의존성 인스턴스
const userRepository = new UserRepository(dataBase);
const userService = new UserService(userRepository);

// userController
class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    getUserIndex(req, res) {
        const { id } = req.params;
        const user = this.userService.getUserIndex(id);
        res.send(user);
    }
}

// 의존성 주입
const userController = new UserController(userService);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/users/:id", (req, res) => userController.getUserIndex(req, res));

app.listen(3000, () => {
    console.log("server on~");
})