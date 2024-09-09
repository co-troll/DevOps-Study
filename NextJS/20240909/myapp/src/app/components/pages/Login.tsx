import Form, { FormAction, FormChildren, FormTheme } from "../molecules/Form";

const Login = () => {
  return (
    <div className="">
      <Form formChildren={FormChildren.LOGIN} children={""} action={FormAction.LOGIN} theme={FormTheme.DEFAULT} className="flex flex-col"/>
    </div>
  );
}

export default Login;