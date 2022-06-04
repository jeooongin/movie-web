import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Button from "./Button";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="MainHeader">
      <Header
        text={"JI cenema"}
        firstChild={
          <Button text={"로그인"} onClick={() => navigate("/login")} />
        }
        secondChild={
          <Button text={"회원가입"} onClick={() => navigate("/sign-up")} />
        }
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default MainHeader;
