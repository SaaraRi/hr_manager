import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import "./Header.css";

const Header = ({ isLoggedIn, loginHandler }) => {
  const buttonText = isLoggedIn ? "Log out" : "Log in";

  return (
    <header>
      <Link to="/">
        <h1>Employee dashboard</h1>
      </Link>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="employees">Employees</Link>
            </li>
            <li>
              <Link to="new">Add new</Link>
            </li>
          </ul>
          <Button onClick={loginHandler} text={buttonText} role="menu" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
