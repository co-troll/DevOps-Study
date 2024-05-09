class Strategy {
    constructor() {
        this.strategy = {};
    }
    setStrategy(key, authenticate) {
        this.strategy[key] = authenticate;
    }
    login(type, credentials) {
        const result = this.strategy[type].authenticate(credentials);
        return result;
    }
}
class EmailAuth {
    authenticate(credentials) {
        console.log("email 로그인 성공");
        return { success: true, message: "이메일 로그인 성공" };
    }
}
class GoogleAuth {
    authenticate(credentials) {
        console.log("google 로그인 실패");
        return { success: false, message: new Error("구글 로그인에서 에러 발생") };
    }
}
class KakaoAuth {
    authenticate(credentials) {
        console.log("kakao 로그인 성공");
        return { success: true };
    }
}
class UserService {
    constructor(strategy) {
        this.strategy = strategy;
    }
    login(type, credentials) {
        const result = this.strategy.login(type, credentials);
        return result;
    }
}
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    signin(type) {
        const loginParams = {
            email: "soon@naver.com",
            password: "1234",
        };
        const result = this.userService.login(type, loginParams);
        console.log(result);
    }
}
const strategy = new Strategy();
strategy.setStrategy("email", new EmailAuth());
strategy.setStrategy("kakao", new KakaoAuth());
strategy.setStrategy("google", new GoogleAuth());
const userService = new UserService(strategy);
const userController = new UserController(userService);
userController.signin("email");
