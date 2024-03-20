import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/foodvilla.png";
import UserContext from "../utils/UserContext";
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

  const { user } = useContext(UserContext);

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
      <h1 className="p1 m-1">{isOnline ? "✅" : "🔴"}</h1>
      <span className="p-10 font-bold text-red-500">{user.name}</span>
      {
        isLoggedIn ? <button className="p-1 m-1" onClick={() => setIsLoggedIn(false)}>Logout</button>
          :
          <button className="p-2 m-2" onClick={() => setIsLoggedIn(true)}>Login</button>
      }
    </div>
  );
};
export default Header;