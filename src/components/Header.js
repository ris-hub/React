import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/foodvilla.png";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src={logo}
    //src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
// Composing Comopnentss
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [title, setTitle] = useState("Food Villa");
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {
        isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          :
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
  );
};
export default Header;