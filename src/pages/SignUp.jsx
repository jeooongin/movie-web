import MainHeader from "../components/MainHeader";
import Button from "../components/Button";

const SignUpForm = () => {
  return (
    <div>
      <MainHeader />
      <div className="SignUp">
        <h2>회원가입</h2>

        <div className="sign_up_id_wrapper">
          <p>아이디</p>
          <input
            className="input_sign_up_id"
            type="text"
            placeholder="아이디"
          />
        </div>

        <div className="sign_up_pw_wrapper">
          <p>비밀번호</p>
          <input
            className="input_sign_up_pw"
            type="password"
            placeholder="비밀번호"
          />
        </div>

        <div className="sign_up_re_pw_wrapper">
          <p>비밀번호 재확인</p>
          <input
            className="input_sign_up_re_pw"
            type="password"
            placeholder="비밀번호 재확인"
          />
        </div>

        <div className="sign_up_name_wrapper">
          <p>이름</p>
          <input
            className="input_sign_up_name"
            type="text"
            placeholder="이름"
          />
        </div>

        <div className="btn_sign_up">
          <Button text={"회원가입"} onClick={1} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
