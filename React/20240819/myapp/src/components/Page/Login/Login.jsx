import LoginForm from "./LoginForm";

const Login = ({ loginInfo }) => {
  return (
    <LoginForm loginInfo={loginInfo} >
      <div>
        여기는 로그인 화면
      </div>
    </LoginForm>
  );
}

export default Login;