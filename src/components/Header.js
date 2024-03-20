import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/foodvilla.png";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="h-28 p-2"
      alt="logo"
      src={logo}
    //src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);
// Composing Comopnentss
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [title, setTitle] = useState("Food Villa");
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
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