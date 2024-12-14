import Button from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const buttonText = props.loginStatus ? "Log out" : "Log in";

  return (
    <header>
      <h1>Employee dashboard</h1>
      <Button onClick={props.onClick} text={buttonText} className="login-button"/>
    </header>
  );
};

export default Header;
