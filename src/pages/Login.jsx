import { useState } from "react";
import Button from "../components/Button";
import MainHeader from "../components/MainHeader";

const Login = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {};

  return (
    <div>
      <MainHeader />
      <div className="Login">
        <h2>로그인</h2>

        <div className="login_id_wrapper">
          <input
            className="input_login_id"
            type="text"
            placeholder="아이디를 입력하세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="login_pw_wrapper">
          <input
            className="input_login_pw"
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="btn_login">
          <Button text={"로그인"} onClick={1} />
        </div>
      </div>
    </div>
  );
};

export default Login;
